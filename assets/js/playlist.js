
$(document).ready(function(){

	$("#jquery_jplayer_2").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "../js",
		supplied: "oga",
		cssSelectorAncestor: "#jp_container_2",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
			});
		},
		play: function() { // To avoid multiple jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		swfPath: "../js",
		supplied: "m4a, oga",
		cssSelectorAncestor: "#jp_container_1",
		wmode: "window",
		globalVolume: true,
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		}		
	], {
		swfPath: "../../dist/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_2",
		cssSelectorAncestor: "#jp_container_2"
	}, [
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		},
		{
				title: "The Way They Do",
				//mp4: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "assets/twtd.ogg"
		}		
	], {
		swfPath: "../../dist/jplayer",
		supplied: "oga, mp3",
		wmode: "window",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});
});