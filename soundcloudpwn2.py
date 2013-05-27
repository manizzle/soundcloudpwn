# SoundCloudPwn 0.2  (2013)
# manizzle && g0tmk

import urllib2, sys, urllib, ujson
someones_client_id = "b45b1aa10f1ac2941910a7f0d10f8e28"
def main():
    whouwant = sys.argv[1]
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    zz = urllib2.urlopen(yy).read()
    zz_uj = ujson.loads(zz)
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s/tracks&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    zz = urllib2.urlopen(yy).read()
    zz_uj = ujson.loads(zz)
    for c in zz_uj:
        zz = urllib2.urlopen(c['stream_url'] + "?client_id=%s" % (someones_client_id)).read()
        f = open(c['title'].replace(' ', '_') + ".out", "w")
        f .write(zz)
        f.close()
        print c['title'], "LolPwnedBySC;p" if c['downloadable'] == False  else "NiceGuy"
        print 
if __name__ == "__main__":
    main()
