// ==UserScript==
// @name			SoundCloud Downloader - Technowise
// @namespace		http://www.technowise.in
// @author			Technowise
// @description		Adds download links to all soundcloud tracks. *Works for the new Soundcloud website interface*
// @include			http://www.soundcloud.com/*
// @include			http://soundcloud.com/*
// @include			https://www.soundcloud.com/*
// @include			https://soundcloud.com/*
// @version			0.71
// ==/UserScript==
//-------------------------------------------------------------------------------------------

var scdlr = {};
scdlr.JQ = null;
scdlr.myUnsafeWindow = null;
scdlr.clientId = 'b45b1aa10f1ac2941910a7f0d10f8e28';

scdlr.addDownloadButton= function ( sound )
{	

		var downloadLink = scdlr.JQ(document.createElement("a") );
		var resolveUrl = null, buttonClass=null;

		anchor = scdlr.JQ(sound).find(".soundTitle__title").eq(0);


		if( scdlr.JQ(sound).is(".single") )
			resolveUrl = document.location.href;
		else
			resolveUrl = 'https://soundcloud.com'+anchor.attr("href");


		urlSplitArray = resolveUrl.split("/");
		lastElement = urlSplitArray.pop();
		secretToken = '';
		
		if( lastElement.substr(0,2) == 's-' )//Add secret token if present.
		{
			secretToken = lastElement;
		}


		scdlr.JQ.getJSON("https://api.soundcloud.com/resolve.json?callback=?", {url: resolveUrl, client_id:scdlr.clientId, secret_token:secretToken}, function(track)
		{				
			trackId = track.id.toString();
			scdlr.JQ.getJSON("https://api.soundcloud.com/i1/tracks/"+trackId+"/streams?callback=?", {client_id:scdlr.clientId, secret_token:secretToken}, function( data )
			{
				downloadLink.attr("href", data.http_mp3_128_url);
			});
		});

		scdlr.JQ(sound).find(".sc-button-group:first").eq(0).append(downloadLink);

}

function myMain()
{	
	scdlr.myUnsafeWindow = unsafeWindow;

	scdlr.JQ = scdlr.myUnsafeWindow.jQuery;
	scdlr.c = Math.random().toString(36).substring(7);

	scdlr.JQ(".sound").not(".playlist").each( function()
	{
		scdlr.addDownloadButton( this );
	});
	
	if( scdlr.JQ(".trackList").length > 0 )//We have a playlist, add download link to each item in the playlist.
	{
		scdlr.JQ(".trackList .trackList__listItem").each( function ()
		{
			scdlr.addDownloadButton( this );
		});
	}
	scdlr.JQ(document).off("mousedown");
	scdlr.JQ(window).off("mousedown",'a[href*="-media.soundcloud."]');
}


myMain();
