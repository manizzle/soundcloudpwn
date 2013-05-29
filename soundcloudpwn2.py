# SoundCloudPwn 0.2  (2013)
# manizzle && g0tmk
# http://help.soundcloud.com/customer/portal/articles/243684-can-people-download-my-sounds-
# Lies, Lies, and more Lies ;p

import os, urllib2, sys, urllib, ujson, requests, lxml.html, random, math, datetime
from Tkinter import *
from multiprocessing import Process

import tkSimpleDialog, threading
someones_client_id = "b45b1aa10f1ac2941910a7f0d10f8e28"
#someones_client_id = "7dd86f1df1b1f7f08683ffc8b5a39b23"
shame_file = "shame.txt"
SHAME_LIMIT = 10
progress_bar_size = 1
time_to_stop = False
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

        self.shame = Button(frame, text="Shame Somethings", command= lambda : self.shamez(False))
        self.shame.pack(side=LEFT)

        self.shame2 = Button(frame, text="Shame Allthethings", command= lambda : self.shamez(True))
        self.shame2.pack(side=LEFT)

        self.cancel = Button(frame, text="Cancel", command=self.stop)
        self.cancel.pack(side=LEFT)

    def shamez(self, all_the_things):
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

    def stop(self):
        time_to_stop = True


def d(st, id=None):    
    print >>sys.stderr, "%s, %s d printing stuff..." % (datetime.datetime.now().second, datetime.datetime.now().microsecond)
    global obj
    if obj:
        t, m = obj
        if id:
            print >>sys.stderr, "%s, %s d has id..." % (datetime.datetime.now().second, datetime.datetime.now().microsecond)
            t.insert(t.index(id), st)
        else:
            print >>sys.stderr, "%s, %s d no id..." % (datetime.datetime.now().second, datetime.datetime.now().microsecond)
            t.insert(END, st)
        print >>sys.stderr, "%s, %s d updating idletasks..." % (datetime.datetime.now().second, datetime.datetime.now().microsecond)
        m.update_idletasks()
    else:
        print >>sys.stderr, st
    return st

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
    return zz_uj, whouwant


def shame(all_the_things=False):
    global time_to_stop
    f = open(shame_file, "w")
    f.write(d("[+] Writing to %s:  " % shame_file + str(failures) + "\n"))


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
            f.write(d("[+] ID Failures:  " + str(failures) + "\n"))
            failures = 0
            f.write(d(id_account_type + "\n"))
            tracks = get_tracks(id_username)
            f.write("[+] User: %s ->\n" % id_username)
            for c in tracks:
                if not c['downloadable']:
                    f.write(d('\t'  + repr(c['title'])[2:-1] +  "    " + c['stream_url'] + "?client_id=%s\n" % (someones_client_id)))
            if tracks:
                ctr +=1
            if not all_the_things and ctr == SHAME_LIMIT:
                break
            if time_to_stop:
                break;
        else:
            failures += 1
        if all_the_things:
            try:
                i = serch.next()
            except StopIteration as e:
                break
        else:
            i = random.randrange(999999999)
    f.close()

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
    """rip all tracks from a best-guess artist/username to a folder"""
    global time_to_stop
    tracks, username = get_tracks(username)
    numtracks = len(tracks)
    if(numtracks == 0):        
        d("[+] No tracks found\n")
        return []
    os.chdir(make_artist_dir(username))
    for i,c in enumerate(tracks):
        full_url = c['stream_url'] + "?client_id=%s" % (someones_client_id)
        if time_to_stop:
            break;
        zz = urllib2.urlopen(full_url)
        file_size = int(zz.info().getheaders("Content-Length")[0])
        f = open(c['title'].replace(" ", "_").replace("/", " ") + ".mp3", "w")
        dl_block_sz = file_size / progress_bar_size
        #d("[+] %s " % convertSize(file_size).ljust(9, ' '))        
        d("[+][%s/%s] %s | %s" % (str(i+1).rjust(3, '0'), str(numtracks).rjust(3, '0'), shorten(repr(convertSize(file_size) + " " + c['title'])[2:-1], 38).ljust(38, ' ') ,  "thank you %s!\n" % shorten(username, 15) if c['downloadable'] else "cause %s sux!\n" % shorten(username, 15)))

        read_write(zz, f, dl_block_sz, username + str(i))
        if time_to_stop:
            break;
        #d("\n")
    os.chdir("..")

def read_write(url_obj, file_obj, dl_block_sz, id):
    global obj, time_to_stop
    # save line we will be writing to (the one above current)
    #my_line = obj[0].index("%s-1line" % END)
    #d('\n')
    # go to end of current line (this guy really likes format strings)
    #obj[0].mark_set(id, "%slineend" % my_line)
    file_size_dl = 0
    while True:
        print >>sys.stderr, "%s, %s reading buffer..." % (datetime.datetime.now().second, datetime.datetime.now().microsecond)
        buffer = url_obj.read(dl_block_sz);
        if not buffer:
            break;
        file_size_dl += len(buffer)
        print >>sys.stderr, "%s, %s writing buffer..." % (datetime.datetime.now().second, datetime.datetime.now().microsecond)
        file_obj.write(buffer)
        # Progress bar: as simple as it gets
        print >>sys.stderr, "%s, %s making a dot..." % (datetime.datetime.now().second, datetime.datetime.now().microsecond)

        #d('.', id)
        if time_to_stop:
            break;
    print >>sys.stderr, "%s, %s unsetting mark" % (datetime.datetime.now().second, datetime.datetime.now().microsecond)
    # remove mark when we are done with it
    #obj[0].mark_unset(id)
    print >>sys.stderr, "%s, %s closing file..." % (datetime.datetime.now().second, datetime.datetime.now().microsecond)

    file_obj.close()
    
if __name__ == "__main__":
    root = Tk()
    app = App(root)
    root.mainloop()

