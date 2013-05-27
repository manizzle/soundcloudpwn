# SoundCloudPwn 0.2  (2013)
# manizzle && g0tmk

import os, urllib2, sys, urllib, ujson, requests, lxml.html
someones_client_id = "b45b1aa10f1ac2941910a7f0d10f8e28"
#someones_client_id = "7dd86f1df1b1f7f08683ffc8b5a39b23"

def get_lucky_url(name, site=None):
    base  = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q='
    if not site:
        xx =base + urllib.quote(" %s" % name)
    else:
        xx = base + urllib.quote("site:%s %s" % (site, name))
    x = ujson.loads(urllib2.urlopen(xx).read())['responseData']['results'][1]['unescapedUrl']
    return x

def get_ids():
    for i in xrange(0, 999999999):
        yy = "http://api.soundcloud.com/users/%d?client_id=%s" % (i, someones_client_id)
        resp = requests.head(yy)
        if not resp.status_code == 404:
            zz = urllib2.urlopen(yy).read()
            obj = lxml.html.document_fromstring(zz)
            id_username = obj.xpath("//username")[0].text
            dluser(id_username, dl=False)
    
def dluser(username, dl=True):
    whouwant = username
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    zz = requests.head(yy)
    # the given username was not a valid account name
    if  zz.status_code == 404:
        # http, null, soundcloud, artist, ...
        whouwant = get_lucky_url(whouwant, "soundcloud.com").split("/")[3]
    print "[+] User: %s ->" % whouwant
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s/tracks&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    zz = urllib2.urlopen(yy).read()
    zz_uj = ujson.loads(zz)
    if dl:
        if not os.path.isdir(whouwant):
            os.mkdir(whouwant)
        os.chdir(whouwant)
    if not len(zz_uj):
        #print "%s has no tracks" % whouwant
        print "\t--"
    for c in zz_uj:
        full_url = c['stream_url'] + "?client_id=%s" % (someones_client_id)
        if not c['downloadable']:
            print '\t' +  c['stream_url'] + "?client_id=%s" % (someones_client_id)
        #print full_url, c['title'], "LolPwnedBySC;p" 
        if dl:
            zz = urllib2.urlopen().read()
            f = open(c['title'].replace(' ', '_') + ".mp3", "w")
            f .write(zz)
            f.close()
    if dl:
        os.chdir("..")
        
if __name__ == "__main__":
    #dluser(sys.argv[1])
    get_ids()
