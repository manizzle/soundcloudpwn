# SoundCloudPwn 0.2  (2013)
# manizzle && g0tmk
# http://help.soundcloud.com/customer/portal/articles/243684-can-people-download-my-sounds-
# Lies, Lies, and more Lies ;p

import os, urllib2, sys, urllib, ujson, requests, lxml.html, random, math
from Tkinter import *
from multiprocessing import Process

import tkSimpleDialog, threading
someones_client_id = "b45b1aa10f1ac2941910a7f0d10f8e28"
#someones_client_id = "7dd86f1df1b1f7f08683ffc8b5a39b23"
SHAME_LIMIT = 10
progress_bar_size = 64

obj = None

class ScrolledText(Text):
    def __init__(self, frame, **kw):
        self.frame = frame
        self.vbar = Scrollbar(self.frame)
        self.vbar.pack(side=RIGHT, fill=Y)

        kw.update({'yscrollcommand': self.vbar.set})
        Text.__init__(self, self.frame, **kw)
        self.pack(side=TOP, fill=BOTH, expand=True)
        self.vbar['command'] = self.yview

        # Copy geometry methods of self.frame without overriding Text
        # methods -- hack!
        text_meths = vars(Text).keys()
        methods = vars(Pack).keys() + vars(Grid).keys() + vars(Place).keys()
        methods = set(methods).difference(text_meths)

        for m in methods:
            if m[0] != '_' and m != 'config' and m != 'configure':
                setattr(self, m, getattr(self.frame, m))
    def __str__(self):
        return str(self.frame)

class App:
    def __init__(self, master):
        global obj
        self.master = master
        frame = Frame(master)
        frame.pack()
        self.text = ScrolledText(frame, bg='white', height=10, font="Courier")
        self.text.pack(fill=BOTH, side=LEFT, expand=True)

        obj = (self.text, self.master)

        self.button = Button(frame, text="QUIT", fg="red", command=frame.quit)
        self.button.pack(side=RIGHT)

        self.goz = Button(frame, text="Go", command=lambda : self.go(self.master))
        self.goz.pack(side=LEFT)

        self.shamez = Button(frame, text="Shame", command=self.shamez)
        self.shamez.pack(side=LEFT)

    def shamez(self, all_the_things=False):
        t = threading.Thread(target=shame, args = (all_the_things,))
        t.daemon = True
        t.start()

    def go(self, master):
        artist = tkSimpleDialog.askstring("SoundCloudPwn", "Artist:", initialvalue="whouwant?", parent=master)
        if not artist:
            return
        t = threading.Thread(target=dl_sc, args = (artist,))
        t.daemon = True
        t.start()
        dl_sc(artist)

def d(st):
    global obj
    if obj:
        t, m = obj
        t.insert(END, st)
        m.update_idletasks()
    else:
        print >>sys.stderr, st

def get_lucky_url(name, site=None):
    base  = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q='
    if not site:
        name = name.decode("utf-8")
        xx =base + urllib.quote(" %s" % name)
    else:
        site = site.decode("utf-8")
        name = name.decode("utf-8")
        xx = base + urllib.quote("site:%s %s" % (site, name))
    x = ujson.loads(urllib2.urlopen(xx).read())['responseData']['results']
    if not x:
        return None

    return x[1]['unescapedUrl']
    
def get_tracks(username):
    if ' ' in username:
        username = username.replace(' ', '-').lower()
    whouwant = username
    try:
        whouwant = whouwant.decode("utf-8")
    except  UnicodeEncodeError as e:
        d("[E] Username of %s is foobar\n" % (repr(whouwant)))
        return []
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    zz = requests.head(yy)
    # the given username was not a valid account name
    if  zz.status_code == 404:
        # http, null, soundcloud, artist, ...
        d("[E] could not find artist %s, asking google for best match\n" % shorten(whouwant, 20))
        whouwant = get_lucky_url(whouwant, "soundcloud.com")
        if not whouwant:
            d("[E] google doesn't even know who you want\n")
            return []
        whouwant = whouwant.split("/")[3].decode("utf-8")
    d("[+] User: %s ->\n" % whouwant)
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s/tracks&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    reqzz = requests.head(yy)
    if reqzz.status_code == 404:
        d("[E] Could not find track listing for user %s\n" % shorten(whouwant, 20))
        return []
    zz = urllib2.urlopen(yy).read()
    zz_uj = ujson.loads(zz)
    return zz_uj


def shame(all_the_things=False):
    serch = (x for x in xrange(0, 999999999))
    ctr = 0
    failures = 0
    if all_the_things:
        i = serch.next()
    else:
        i = random.randrange(999999999)
    while 1:
        yy = "http://api.soundcloud.com/users/%d?client_id=%s" % (i, someones_client_id)
        resp = requests.head(yy)
        if not resp.status_code == 404:
            zz = urllib2.urlopen(yy).read()
            hobj = lxml.html.document_fromstring(zz)
            id_username = hobj.xpath("//username")[0].text
            id_account_type = hobj.xpath("//plan")[0].text
            d("[+] ID Failures:  " + str(failures) + "\n")
            failures = 0
            d(id_account_type + "\n")
            tracks = get_tracks(id_username)
            for c in tracks:
                if not c['downloadable']:
                    d('\t'  + repr(c['title'])[2:-1] +  "    " + c['stream_url'] + "?client_id=%s\n" % (someones_client_id))
            if tracks:
                ctr +=1
            if not all_the_things and ctr == SHAME_LIMIT:
                break
        else:
            failures += 1
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
        d("[+] Making new directory " + cleaned + "\n")
        os.mkdir(cleaned)
    else:
        d("[+] Using existing directory " + cleaned + "\n")
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
    if(numtracks == 0):        
        d("[+] No tracks found\n")
        return []
    os.chdir(make_artist_dir(username))
    for i,c in enumerate(tracks):
        d("[+][%s/%s] %s | %s" % (str(i+1).rjust(3, '0'), str(numtracks).rjust(3, '0'), shorten(repr(c['title'])[2:-1], 38).ljust(38, ' ') ,  "thank you %s!" % shorten(username, 15) if c['downloadable'] else "cause %s sux!" % shorten(username, 15)))
        full_url = c['stream_url'] + "?client_id=%s" % (someones_client_id)
        zz = urllib2.urlopen(full_url)
        file_size = int(zz.info().getheaders("Content-Length")[0])
        f = open(c['title'].replace(" ", "_").replace("/", " ") + ".mp3", "w")
        dl_block_sz = file_size / progress_bar_size
        d("[+] %s\n " % convertSize(file_size).ljust(9, ' '))
        read_write(zz, f, dl_block_sz)
        d("\n")
    os.chdir("..")

def read_write(url_obj, file_obj, dl_block_sz):
    file_size_dl = 0
    while True:
        buffer = url_obj.read(dl_block_sz);
        if not buffer:
            break;
        file_size_dl += len(buffer)
        file_obj.write(buffer)
        # Progress bar: because newlines/spaces are dumb
        d('.')
    file_obj.close()
    
if __name__ == "__main__":
    root = Tk()
    app = App(root)
    root.mainloop()

