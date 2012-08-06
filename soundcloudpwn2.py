#
# Copyright (c) 2011
# SoundCloudPwn
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
# THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

import urllib2, json, lxml.html, sys, os, os.path

def die():
    print '[*] No tracks by this artist found'
    sys.exit(0)
    
def get_songs(dude, page, riptype):
    ret = []
    base = 'http://soundcloud.com/'
    artist = '/tracks?page='
    search = 'search?q[fulltext]='
    if riptype == 'artist':
        trackurl = base + dude + artist + str(page)
    else:
        trackurl = base + search + dude + '&page=' + str(page)
    print '[+] The page selected was %s' % trackurl
    page = lxml.html.parse(trackurl)
    for script in page.xpath('//script[@type = "text/javascript"]'):
        if not script.text == None:
            if "media.soundcloud.com/stream" in script.text:
               ret.append(json.loads(script.text.replace('window.SC.bufferTracks.push(', '').replace(');', '')))
    if not ret:
        die()
    return ret

def get_max_pages(dude, riptype):
    base = 'http://souncloud.com/'
    artist = '/tracks'
    search = 'search?q[fulltext]='
    if riptype == 'search':
        fullurl = base + search + dude 
    else:
        fullurl = base + dude + artist 
    print fullurl
    try:
        arefs = lxml.html.parse(fullurl).xpath('//div[@class="pagination"]/a')
    except IOError, e:
        die()
    print arefs
    pages = [int(guide.text) for guide in arefs if guide.text.isdigit()]
    if not pages:
        return 1
    else:
        return max(pages)

def rip_mp3(target, song):
    print "[*] Ripping Song: " + song['title'].strip() + "..."
    f = open(target + '/' + clean(song['title']) + '.mp3', 'wb')
    f.write(urllib2.urlopen(song['streamUrl']).read())
    f.close()

def pwn(riptype, target):
    if not os.path.isdir(target):
        print "[*] Making output directory " + target + ". ..."
        os.mkdir(target)
    else:
        print "[*] Using existing directory ..."
    print "[*] Ripping  Artist: " + target + "..."
    maxpages = get_max_pages(target, riptype)
    print "[*] Parsing " + str(maxpages) + " pages..."
    for page in xrange(1, maxpages + 1):
        print "[*] Fetching Page# " + str(page)
        for song in get_songs(target, page, riptype):
            #rip_mp3(target, song)
	    print song

def clean(url):
    return ''.join([letter for letter in url if letter.isalpha() or
        letter.isdigit()])

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print """[*] USAGE IS python soundcloudpwn.py [search | artist] [artist]"""
    else:
        pwn(sys.argv[1], sys.argv[2])
