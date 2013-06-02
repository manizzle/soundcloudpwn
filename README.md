#SoundCloudPwn

This tool downloads all tracks from an artist's SoundCloud Profile

####Requirements(TODO, cleanup):
- Python 2
- pyquery, pyqt, lxml, requests, urllib2, urllib2

####Starting
Run soundcloudpwn2.py from commandline to launch GUI

###Development

####Bugs
- multiple shame threads walk all over eachothers log file output (the
  solution now is to simply copy-paste the text field's output)
- ID3 library occasionally throws TypeError when setting a data field
- config file is created (and checked for) in current direcory, rather
  than a fixed location (ie the folder containing the executable, home
  directory, etc)

####To do:
- check ID3 tags functionality
- switch to ID3v2 (or extended v1)
- handle a json config file
- decide on RainCloud as a name

soundcloudpwn.py was an old iteration of this script
