# SoundCloudPwn 0.2  (2013)
# manizzle && g0tmk
#
# http://help.soundcloud.com/customer/portal/articles/243684-can-people-download-my-sounds-
# Lies, Lies, and more Lies ;p
#
# Documentation @
#   http://developers.soundcloud.com/docs/api/reference

from Tkinter import *
import os, urllib2, sys, urllib, ujson, requests, lxml.html, random, math, threading, tkSimpleDialog
# open API link using a web browser
import webbrowser 

# scpwn info
VERSION = 0.2
APPNAME = SoundCloudPwn
# sc api cid
someones_client_id = "b45b1aa10f1ac2941910a7f0d10f8e28"
# backup cid
#someones_client_id = "7dd86f1df1b1f7f08683ffc8b5a39b23"
# where to write shame output
SHAME_FILE = "shame.txt"
# where to link API to in about()
API_REF_LINK = "http://developers.soundcloud.com/docs/api/reference"
# show some extra messages / untested options
debug_mode = False
# debug string to look for in text box, typing it @ beginning (and clicking go) enables debug_mode while running
DEBUG_MSG = ":debug"
# whether or not to copy all messages to sterr
write_to_stderr = False

# min number of artists (w/ priv tracks) to print before shame somethings exits
SHAME_LIMIT = 10
# flag to threads that they should stop all work and exit
time_to_stop = False
# global reference to tkinter text object
obj = None
# counter, increments with number of active threads to give them all unique IDs
thread_id_ctr = 0


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
        self.text = ScrolledText(frame, bg='white', height=20, font="Courier")
        self.text.pack(fill=BOTH, side=LEFT, expand=True)

        self.text.tag_config("hyper", foreground="blue", underline=1)
        self.text.tag_bind("hyper", "<Enter>", self._enter)
        self.text.tag_bind("hyper", "<Leave>", self._exit)
        self.text.tag_bind("hyper", "<Button-1>", self._link)
        self.text.config(cursor="arrow")

        obj = (self.text, self.master)

        self.button = Button(frame, text="QUIT", fg="red", command=frame.quit)
        self.button.pack(side=RIGHT)

        self.button = Button(frame, text="About", fg="red", command=self.about)
        self.button.pack(side=RIGHT)

        self.goz = Button(frame, text="Go", command=lambda : self.go(self.master))
        self.goz.pack(side=LEFT)

        self.shame = Button(frame, text="Shame Somethings", command= lambda : self.shamez(False))
        self.shame.pack(side=LEFT)

        self.shame2 = Button(frame, text="Shame Allthethings", command= lambda : self.shamez(True))
        self.shame2.pack(side=LEFT)

        #self.cancel = Button(frame, text="Stop", command=self.stop)
        #self.cancel.pack(side=LEFT)

        self.cancel = Button(frame, text="Cancel", command=self.stop)
        self.cancel.pack(side=LEFT)
        
        self.about()


    def shamez(self, all_the_things):
        global thread_id_ctr
        thread_id_ctr += 1        
        threads = tkSimpleDialog.askstring(APPNAME, "Threads:", initialvalue="10", parent=master)
        t = threading.Thread(target=shame, name=str(thread_id_ctr), args = (all_the_things,))
        t.daemon = True
        t.start()        

    def go(self, master):
        global thread_id_ctr
        start_index = 0
        # enable debug mode when the DEBUG_MSG is the first string in the text box
        debug_mode = True if self.text.get("0.0","0.0+%sc" % len(DEBUG_MSG)).find(DEBUG_MSG) == 0 else False
        if debug_mode:
            write_to_stderr == True
            start_index = tkSimpleDialog.askstring(APPNAME, "Start index:", initialvalue="0", parent=master)

        thread_id_ctr += 1
        artist = tkSimpleDialog.askstring(APPNAME, "Artist:", initialvalue="whouwant?", parent=master)
        if not artist:
            return
        t = threading.Thread(target=dl_sc, name=str(thread_id_ctr), args = (artist,start_index))
        t.daemon = True
        t.start()

    def stop(self):
        global thread_id_ctr, time_to_stop
        # FIXME: still hangs occasionally when running many shame_somethings threads whoknows why
        d("[*] Killing %s threads\n" % (threading.active_count() - 1))
        time_to_stop = True
        for e in threading.enumerate():
            if not e == threading.current_thread():
                e.join()
                time_to_stop = False
                d("[*] Thread %s exiting\n" % e.name)
                time_to_stop = True

        if not thread_id_ctr == 0:
            d("[*] Done killing threads\n")
            thread_id_ctr = 0
        time_to_stop = False

    def about(self):
        d("[~] %s %s\n" % (APPNAME, VERSION))        
        d("[~] Brought to you by soundcloud's open-as-fuck ")
        # hackish.. prints the word API as a link, but nothing before and not the newline after it
        if(write_to_stderr):
            sys.stderr.write("API\n")
        self.text.insert(END, "API", ("hyper"))
        self.text.insert(END, "\n")
        
    def _exit(self, event):
        self.text.config(cursor="")
    def _enter(self, event):
        self.text.config(cursor="hand2")
    def _link(self, event):
        webbrowser.open_new_tab(API_REF_LINK)

def d(st, id=None):
    if time_to_stop:
        return st
    global obj, write_to_stderr
    if obj:
        t, m = obj
        # if we are passed a screen position to write to
        if id:
            t.insert(t.index(id), st)
        else:
            t.insert(END, st)
        t.see(END)
        # keep the log updated - seems unnecessary now that work is done in threads
        #m.update_idletasks()
    if write_to_stderr:
        sys.stderr.write(st)
    return st

def get_lucky_url(name, site=None):
    base  = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q='
    if not site:
        name = name.decode("utf-8")
        xx = base + urllib.quote(" %s" % name)
    else:
        site = site.decode("utf-8")
        name = name.decode("utf-8")
        xx = base + urllib.quote("site:%s %s" % (site, name))
    x = ujson.loads(urllib2.urlopen(xx).read())['responseData']['results']
    if not x:
        return None
    return x[1]['unescapedUrl']
    
def get_tracks(username):
    global time_to_stop
    if ' ' in username:
        username = username.replace(' ', '-').lower()
    whouwant = username
    try:
        whouwant = whouwant.decode("utf-8")
    except UnicodeEncodeError as e:
        d("[E] Username of %s is foobar\n" % (repr(whouwant)))
        return []
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    zz = requests.head(yy)
    if time_to_stop:
        return None, None
    # the given username was not a valid account name
    if  zz.status_code == 404:
        # http, null, soundcloud, artist, ...
        d("[E] could not find artist %s, asking google for best match\n" % shorten(whouwant, 20))
        whouwant = get_lucky_url(whouwant, "soundcloud.com")
        if not whouwant:
            d("[E] google doesn't even know who you want\n")
            return []
        whouwant = whouwant.split("/")[3].decode("utf-8")
    if time_to_stop:
        return None, None
    d("[+] User: %s ->\n" % whouwant)
    yy = "http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/%s/tracks&client_id=%s" % (urllib.quote(whouwant), someones_client_id)
    reqzz = requests.head(yy)
    if reqzz.status_code == 404:
        d("[E] Could not find track listing for user %s\n" % shorten(whouwant, 20))
        return []
    zz = urllib2.urlopen(yy).read()
    if time_to_stop:
        return None, None
    zz_uj = ujson.loads(zz)
    return zz_uj, whouwant

def shame(all_the_things=False, range=None):
    global time_to_stop
    # TODO: fix multiple shame threads outputing to same file
    f = open(SHAME_FILE, "a")
    f.write(d("[+] Appending to %s:\n" % SHAME_FILE))

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
        if time_to_stop:
            break
        if not resp.status_code == 404:
            zz = urllib2.urlopen(yy).read()
            hobj = lxml.html.document_fromstring(zz)
            if time_to_stop:
                break
            id_username = hobj.xpath("//username")[0].text
            id_account_type = hobj.xpath("//plan")[0].text
            f.write(d("[+] ID Failures:  " + str(failures) + "\n"))
            failures = 0
            f.write(d("[+] %s\n" % id_account_type))
            tracks, id_username = get_tracks(id_username)
            if time_to_stop:
                break
            f.write("[+] User: %s ->\n" % id_username)
            for c in tracks:
                if not c['downloadable']:
                    f.write(d('\t'  + repr(c['title'])[2:-1] +  "    " + c['stream_url'] + "?client_id=%s\n" % (someones_client_id)))
                if time_to_stop:
                    break
            if time_to_stop:
                break
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
    if f:
        f.close()
    d("[*] Thread %s exiting, done shaming\n" % threading.current_thread().name)
    all_done_check()

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

def dl_sc(username, start_index="0"):
    """rip all tracks from a best-guess artist/username to a folder"""
    global time_to_stop
    tracks, username = get_tracks(username)
    numtracks = len(tracks)
    if(numtracks == 0):        
        d("[+] Thread %s exiting, No tracks found\n" % threading.current_thread().name)
        all_done_check()
        return []
    user_folder = (make_artist_dir(username))
    for i,c in enumerate(tracks):
        if int(i) < (int(start_index) - 1):
            continue
        full_url = c['stream_url'] + "?client_id=%s" % (someones_client_id)
        if time_to_stop:
            break
        zz = urllib2.urlopen(full_url)
        file_size = int(zz.info().getheaders("Content-Length")[0])
        f = open(user_folder + "/" + c['title'].replace(" ", "_").replace("/", " ") + ".mp3", "w")
        d("[+][%s/%s] %s | %s" % (str(i+1).rjust(3, '0'), str(numtracks).rjust(3, '0'), shorten(repr(convertSize(file_size) + " " + c['title'])[2:-1], 38).ljust(38, ' ') ,  "thank you %s!\n" % shorten(username, 15) if c['downloadable'] else "cause %s sux!\n" % shorten(username, 15)))

        read_write(zz, f, file_size, username + str(i))
        if time_to_stop:
            break
    d("[+] Thread %s exiting, done with %s\n" % (threading.current_thread().name, username))
    all_done_check()

def read_write(url_obj, file_obj, dl_block_sz, id):
    global obj, time_to_stop
    file_size_dl = 0
    while True:
        buffer = url_obj.read(dl_block_sz);
        if not buffer:
            break;
        file_size_dl += len(buffer)
        file_obj.write(buffer)
        if time_to_stop:
            break;
    file_obj.close()

def all_done_check():
    # means there is only main thread + one other thread (the one calling this)
    if threading.active_count() == 2:
        d("[+] No more work.\n")

    
if __name__ == "__main__":
    root = Tk()
    root.wm_title("%s v%s" % (APPNAME, VERSION))
    menubar = Menu(root)

    app = App(root)
    root.mainloop()
