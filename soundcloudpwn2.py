# SoundCloudPwn 0.2  (2013)
# manizzle && g0tmk
# http://help.soundcloud.com/customer/portal/articles/243684-can-people-download-my-sounds-
# Lies, Lies, and more Lies ;p

import os, urllib2, sys, urllib, ujson, requests, lxml.html, random, math
someones_client_id = "b45b1aa10f1ac2941910a7f0d10f8e28"
#someones_client_id = "7dd86f1df1b1f7f08683ffc8b5a39b23"
SHAME_LIMIT = 10
progress_bar_size = 64


def get_lucky_url(name, site=None):
    base  = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q='
    if not site:
        name = name.decode("utf-8")
        xx =base + urllib.quote(" %s" % name)
    else:
        site = site.decode("utf-8")
        name = name.decode("utf-8")
        xx = base + urllib.quote("site:%s %s" % (site, name))
    x = ujson.loads(urllib2.urlopen(xx).read())['responseData']['results'][1]['unescapedUrl']
    return x
    
def get_tracks(username):
    whouwant = username
    try:
        whouwant = whouwant.decode("utf-8")
    except  UnicodeEncodeError as e:
        print >>sys.stderr, "Username of %s is foobar" % (repr(whouwant))
        return []
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    zz = requests.head(yy)
    # the given username was not a valid account name
    if  zz.status_code == 404:
        # http, null, soundcloud, artist, ...
        whouwant = get_lucky_url(whouwant, "soundcloud.com").split("/")[3].decode("utf-8")
    print >>sys.stderr, "[+] User: %s ->" % whouwant
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s/tracks&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    reqzz = requests.head(yy)
    if reqzz.status_code == 404:
        print >>sys.stderr, "Could not find track listing for user %s" % whouwant
        return []
    zz = urllib2.urlopen(yy).read()
    zz_uj = ujson.loads(zz)
    return zz_uj


def shame(all_the_things=False):
    serch = (x for x in xrange(0, 999999999))
    ctr = 0
    if all_the_things:
        i = serch.next()
    else:
        i = random.randrange(999999999)
    while 1:
        yy = "http://api.soundcloud.com/users/%d?client_id=%s" % (i, someones_client_id)
        resp = requests.head(yy)
        if not resp.status_code == 404:
            zz = urllib2.urlopen(yy).read()
            obj = lxml.html.document_fromstring(zz)
            id_username = obj.xpath("//username")[0].text
            id_account_type = obj.xpath("//plan")[0].text
            print >>sys.stderr, id_account_type
            tracks = get_tracks(id_username)
            for c in tracks:
                if not c['downloadable']:
                    print >>sys.stderr, '\t'  + repr(c['title']) +  "    " + c['stream_url'] + "?client_id=%s" % (someones_client_id)
            if tracks:
                ctr +=1
            if not all_the_things and ctr == SHAME_LIMIT:
                break
        if all_the_things:
            try:
                i = serch.next()
            except StopIteration as e:
                break
        else:
            i = random.randrange(999999999)

def make_artist_dir(target):
    cleaned = clean(target)
    if not os.path.isdir(cleaned):
        print >>sys.stderr, "[+] Making new directory " + cleaned
        os.mkdir(cleaned)
    else:
        print >>sys.stderr, "[+] Using existing directory " + cleaned
    return cleaned            

def clean(url):
    return ''.join([letter for letter in url.replace(' ', '_') if letter.isalpha() or
        letter.isdigit() or letter == '_'])

def convertSize(size):
   size_name = ("B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB")
   i = int(math.floor(math.log(size,1024)))
   p = math.pow(1024,i)
   s = round(size/p,2)
   if (s > 0):
       return '%s %s' % (s,size_name[i])
   else:
       return '0B'

def shorten(string, length):
    result = string[:length]
    if(len(result) == length):
        return result[:length-3].ljust(length, '.')
    return result

def dl_sc(username):
    tracks = get_tracks(username)
    numtracks = len(tracks)
    os.chdir(make_artist_dir(username))
    for i,c in enumerate(tracks):
        print >>sys.stderr, "[+][%s/%s] %s | %s" % (str(i+1).rjust(3, '0'), str(numtracks).rjust(3, '0'), shorten(repr(c['title'])[2:-1], 38).ljust(38, ' ') ,  "thank you %s!" % shorten(username, 15) if c['downloadable'] else "cause %s sux!" % shorten(username, 15))
        full_url = c['stream_url'] + "?client_id=%s" % (someones_client_id)
        zz = urllib2.urlopen(full_url)
        file_size = int(zz.info().getheaders("Content-Length")[0])
        f = open(c['title'].replace(" ", "_").replace("/", " ") + ".mp3", "w")
        file_size_dl = 0
        dl_block_sz = file_size / progress_bar_size
        print "[+] %s " % convertSize(file_size).ljust(9, ' '),
        while True:
            buffer = zz.read(dl_block_sz);
            if not buffer:
                break;
            file_size_dl += len(buffer)
            f.write(buffer)
            # because newlines/spaces are dumb
            sys.stdout.write('.')
            sys.stdout.flush()
            
        print
        #f.write(zz.read())
        f.close()
    os.chdir("..")
    
if __name__ == "__main__":
    if len(sys.argv) == 1:
        shame(True)
        #shame()
    elif len(sys.argv) == 2:
        dl_sc(sys.argv[1])