# SoundCloudPwn 0.2  (2013)
# manizzle && g0tmk
# http://help.soundcloud.com/customer/portal/articles/243684-can-people-download-my-sounds-
# Lies, Lies, and more Lies ;p

import os, urllib2, sys, urllib, ujson, requests, lxml.html, random
someones_client_id = "b45b1aa10f1ac2941910a7f0d10f8e28"
#someones_client_id = "7dd86f1df1b1f7f08683ffc8b5a39b23"
SHAME_LIMIT = 10

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
            

def dl_sc(username):
    tracks = get_tracks(username)
    if not os.path.isdir(username):
        os.mkdir(username)
    os.chdir(username)
    for c  in tracks:
        print >>sys.stderr, "\tDownloading %s %s" % (repr(c['title']) ,  "thank you %s!" % username if c['downloadable'] else " cause %s sucks!" % username)
        full_url = c['stream_url'] + "?client_id=%s" % (someones_client_id)
        zz = urllib2.urlopen(full_url).read()
        f = open(c['title'].replace(' ', '_') + ".mp3", "w")
        f .write(zz)
        f.close()
    os.chdir("..")
    
if __name__ == "__main__":
    if len(sys.argv) == 1:
        shame(True)
        #shame()
    elif len(sys.argv) == 2:
        dl_sc(sys.argv[1])

