function opnsetting(){
if(document.getElementById("setting-cntrls").style.display == "block"){
document.getElementById("setting-cntrls").style.display = "none";
}else{
document.getElementById("setting-cntrls").style.display = "block";
}
}
document.getElementById("asinfo").addEventListener("click", function(){window.open('https://asbros.github.io', '_blank');});

// Select elements here
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');
const playButton = document.getElementById('play');
const playbackIcons = document.querySelectorAll('.playback-icons use');
const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');
const progressBar = document.getElementById('progress-bar');
const seek = document.getElementById('seek');
const seekTooltip = document.getElementById('seek-tooltip');
const volumeButton = document.getElementById('volume-button');
const volumeIcons = document.querySelectorAll('.volume-button use');
const volumeMute = document.querySelector('use[href="#volume-mute"]');
const volumeLow = document.querySelector('use[href="#volume-low"]');
const volumeHigh = document.querySelector('use[href="#volume-high"]');
const volume = document.getElementById('volume');
const playbackAnimation = document.getElementById('playback-animation');
const fullscreenButton = document.getElementById('fullscreen-button');
const videoContainer = document.getElementById('video-container');
const fullscreenIcons = fullscreenButton.querySelectorAll('use');
const pipButton = document.getElementById('pip-button')

const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
video.controls = false
videoControls.classList.remove('hidden');
}

// Add functions here


// togglePlay toggles the playback state of the video.
// If the video playback is paused or ended, the video is played
// otherwise, the video is paused
function togglePlay() {
if (video.paused || video.ended) {
video.play();
setTimeout(hideControls, 2000);
} else {
video.pause();
setTimeout(showControls, 1);
}
}

// updatePlayButton updates the playback icon and tooltip
// depending on the playback state
function updatePlayButton() {
playbackIcons.forEach(icon => icon.classList.toggle('hidden'));

if (video.paused) {
playButton.setAttribute('data-title', 'Play (k)')
} else {
playButton.setAttribute('data-title', 'Pause (k)')
}
}

// formatTime takes a time length in seconds and returns the time in
// minutes and seconds
function formatTime(timeInSeconds) {
const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

return {
minutes: result.substr(3, 2),
seconds: result.substr(6, 2),
};
};

// initializeVideo sets the video duration, and maximum value of the
// progressBar
function initializeVideo() {
const videoDuration = Math.round(video.duration);
seek.setAttribute('max', videoDuration);
progressBar.setAttribute('max', videoDuration);
const time = formatTime(videoDuration);
duration.innerText = `${time.minutes}:${time.seconds}`;
duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

// updateTimeElapsed indicates how far through the video
// the current playback is by updating the timeElapsed element
function updateTimeElapsed() {
const time = formatTime(Math.round(video.currentTime));
timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}

// updateProgress indicates how far through the video
// the current playback is by updating the progress bar
function updateProgress() {
seek.value = Math.floor(video.currentTime);
progressBar.value = Math.floor(video.currentTime);
}

// updateSeekTooltip uses the position of the mouse on the progress bar to
// roughly work out what point in the video the user will skip to if
// the progress bar is clicked at that point
function updateSeekTooltip(event) {
const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
seek.setAttribute('data-seek', skipTo)
const t = formatTime(skipTo);
seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
const rect = video.getBoundingClientRect();
seekTooltip.style.left = `${event.pageX - rect.left}px`;
}

// skipAhead jumps to a different point in the video when the progress bar
// is clicked
function skipAhead(event) {
const skipTo = event.target.dataset.seek
? event.target.dataset.seek
: event.target.value;
video.currentTime = skipTo;
progressBar.value = skipTo;
seek.value = skipTo;
}

// updateVolume updates the video's volume
// and disables the muted state if active
function updateVolume() {
if (video.muted) {
video.muted = false;
}

video.volume = volume.value;
}

// updateVolumeIcon updates the volume icon so that it correctly reflects
// the volume of the video
function updateVolumeIcon() {
volumeIcons.forEach(icon => {
icon.classList.add('hidden');
});

volumeButton.setAttribute('data-title', 'Mute (m)')

if (video.muted || video.volume === 0) {
volumeMute.classList.remove('hidden');
volumeButton.setAttribute('data-title', 'Unmute (m)')
} else if (video.volume > 0 && video.volume <= 0.5) { volumeLow.classList.remove('hidden'); } else { volumeHigh.classList.remove('hidden'); } } // toggleMute mutes or unmutes the video when executed // When the video is unmuted, the volume is returned to the value // it was set to before the video was muted function toggleMute() { video.muted=!video.muted; if (video.muted) { volume.setAttribute('data-volume', volume.value); volume.value=0; } else { volume.value=volume.dataset.volume; } } // animatePlayback displays an animation when // the video is played or paused function animatePlayback() { playbackAnimation.animate([ { opacity: 1, transform: "scale(1)" , }, { opacity: 0, transform: "scale(1.3)" , } ], { duration: 500, }); } // toggleFullScreen toggles the full screen state of the video // If the browser is currently in fullscreen mode, // then it must be exited and vice versa. function toggleFullScreen() { if (document.fullscreenElement) { document.exitFullscreen(); } else { videoContainer.requestFullscreen(); } } // updateFullscreenButton changes the icon of the full screen button // and tooltip to reflect the current full screen state of the video function updateFullscreenButton() { fullscreenIcons.forEach(icon=> icon.classList.toggle('hidden'));

 if (document.fullscreenElement) {
 fullscreenButton.setAttribute('data-title', 'Exit full screen (f)')
 } else {
 fullscreenButton.setAttribute('data-title', 'Full screen (f)')
 }
 }
 // togglePip toggles Picture-in-Picture mode on the video
 async function togglePip() {
 try {
 if (video !== document.pictureInPictureElement) {
 await video.requestPictureInPicture();
 } else {
 await document.exitPictureInPicture();
 }
 } catch (error) {
 console.error(error)
 } finally {
 pipButton.disabled = false;
 }
 }


 // hideControls hides the video controls when not in use
 // if the video is paused, the controls must remain visible
 function hideControls() {
 if (video.paused) {
 return;
 }

 videoControls.classList.add('hide');
 }

 // showControls displays the video controls
 function showControls() {
 videoControls.classList.remove('hide');
 }

 function toggleControls() {
 if(videoControls.classList.contains("hide")) {
 videoControls.classList.remove('hide');
 }else{
 videoControls.classList.add('hide');
 }
 }

 // keyboardShortcuts executes the relevant functions for
 // each supported shortcut key
 function keyboardShortcuts(event) {
 const { key } = event;
 switch(key) {
 case 'k':
 togglePlay();
 animatePlayback();
 break;
 case 'm':
 toggleMute();
 break;
 case 'f':
 toggleFullScreen();
 break;
 case 'p':
 togglePip();
 break;
 }
 }

 // Add eventlisteners here
 playButton.addEventListener('click', togglePlay);
 video.addEventListener('play', updatePlayButton);
 video.addEventListener('pause', updatePlayButton);
 video.addEventListener('loadedmetadata', initializeVideo);
 video.addEventListener('timeupdate', updateTimeElapsed);
 video.addEventListener('timeupdate', updateProgress);
 video.addEventListener('volumechange', updateVolumeIcon);
 video.addEventListener('click', togglePlay);
 video.addEventListener('click', animatePlayback);
 seek.addEventListener('mousemove', updateSeekTooltip);
 seek.addEventListener('input', skipAhead);
 volume.addEventListener('input', updateVolume);
 volumeButton.addEventListener('click', toggleMute);
 fullscreenButton.addEventListener('click', toggleFullScreen);
 videoContainer.addEventListener('fullscreenchange', updateFullscreenButton);
 pipButton.addEventListener('click', togglePip);

 document.addEventListener('DOMContentLoaded', () => {
 if (!('pictureInPictureEnabled' in document)) {
 pipButton.classList.add('hidden');
 }
 });
 document.addEventListener('keyup', keyboardShortcuts);

;(function(root, name, output){
if(typeof define == "function" && define.amd) return define([], output)
if(typeof module == "object" && module.exports) module.exports = output()
else root[name] = output()
})(this.window, "m3uStreamPlayer", function(){

'use strict';

// Defaults
var exports = {
selector: '[data-playlist]',
debug: false
};

// Load playlist, and get sources.
var _getPlaylistSources = function(elem) {
// XHR Request to playlist file
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = process;
xhr.open("GET", elem.getAttribute('data-playlist'), true);
xhr.send();
function process() {
if (xhr.readyState == 4) {
// m3uToUrl From https://github.com/aitorciki/jquery-playlist/blob/master/jquery.playlist.js
elem.sources = xhr.responseText.match(/^(?!#)(?!\s).*$/mg).filter(function(element){return (element);});
if (exports.debug) console.log("Sources: "+elem.sources);
// Load first source
elem.src = elem.sources[0];
// Play first source
if (elem.getAttribute('autoplay')) elem.play();
}
}
}

// Load playlist, and get sources.
var _refreshSource = function(elem) {
// XHR Request to playlist file
elem.sources = [];
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = process;
xhr.open("GET", elem.getAttribute('data-playlist'), true);
xhr.send();
function process() {
if (xhr.readyState == 4) {
// m3uToUrl From https://github.com/aitorciki/jquery-playlist/blob/master/jquery.playlist.js
elem.sources = xhr.responseText.match(/^(?!#)(?!\s).*$/mg).filter(function(element){return (element);});
if (exports.debug) console.log("Sources: "+elem.sources);
}
}
}

// Get current source index
var _getSourceIdx = function(elem) {
for(var i = 0; i < elem.sources.length; i++){ if (elem.currentSrc==elem.sources[i]) return i; } return 0; } // Jump to next source. var _nextSource=function(elem) { var sourceIdx=_getSourceIdx(elem); var nextSourceIdx=(sourceIdx==elem.sources.length -1 ) ? 0 : sourceIdx + 1; elem.src=elem.sources[nextSourceIdx]; if (exports.debug) console.log("Source updated: "+elem.src);
      elem.play();
    }
    var _preSource = function(elem) {
      var sourceIdx  = _getSourceIdx(elem);
      var preSourceIdx = (sourceIdx == elem.sources.length + 1 ) ? 0 : sourceIdx - 1;
  
      elem.src = elem.sources[preSourceIdx];
      if (exports.debug) console.log(" Source updated: "+elem.src);
      elem.play();
    }
  
  
    // Randomize source.
    var _randomizeSource = function(elem) {
      elem.src = elem.sources[Math.floor(Math.random()*elem.sources.length)];
      // this.currentTime = 0;
      if (exports.debug) console.log(" Source randomized: "+elem.src);
      elem.play();
    }
  
    // Display human readable message in console.
    var _errorMessage = function(event) {
      switch (event.target.error.code) {
  case event.target.error.MEDIA_ERR_ABORTED:
    return " The fetching process for the media resource was aborted by the user agent at the user's request."; case event.target.error.MEDIA_ERR_NETWORK: return "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable." ; case event.target.error.MEDIA_ERR_DECODE: return "An error of some description occurred while decoding the media resource, after the resource was established to be usable." ; case event.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED: return "The media resource indicated by the src attribute was not suitable." ; default: return "An unknown error occurred." ; } } // Process element, attach listeners var _process=function(elem) { elem.sources=[]; _getPlaylistSources(elem); // On error, update source, and play again. elem.addEventListener('error', function(e) { if (exports.debug) console.log("Error: " + _errorMessage(e));
  _nextSource(this);
      });
  
      // On end, update source, and play again.
      elem.addEventListener('ended', function() {
  if (exports.debug) console.log(" Ended"); _nextSource(this); }); // Show current source, debug only. elem.addEventListener('play', function(e) { if (exports.debug) console.log("Play: "+this.currentSrc);
      });
  
      // Pause event, debug only.
      elem.addEventListener('pause', function() {
  if (exports.debug) console.log(" Pause"); }); } // Expose nextSource function exports.nextSource=function(elem) { _nextSource(elem); } exports.preSource=function(elem) { _preSource(elem); } // Expose randomizeSource function exports.refreshSource=function(elem) { _refreshSource(elem); } exports.init=function (obj) { // Allow string to be passed as argument. if (typeof obj==="string" ) obj={selector: obj} // Mix options with defaults. for (var key in obj) { exports[key]=obj[key]; } // Prevent IE8 from bugging when a calling console.log if (exports.debug) { if (!window.console) window.console={}; if (!window.console.log) window.console.log=function () { }; } // Get nodes, and process them. var nodes=document.querySelectorAll(exports.selector); for (var i=0; i < nodes.length; i++) { var node=nodes[i]; if (node.nodeName==="VIDEO" || node.nodeName==="AUDIO" ) { _process(node); } } }; return exports; }); m3uStreamPlayer.init({selector: '#video' , debug: true}); var buttonNextSource=document.querySelector('#video-next-source'); var buttonPreSource=document.querySelector('#video-pre-source'); buttonNextSource.addEventListener('click', function(){ m3uStreamPlayer.nextSource(document.querySelector('#video')); }) buttonPreSource.addEventListener('click', function(){ m3uStreamPlayer.preSource(document.querySelector('#video')); }); function skip_cha(){ document.getElementById("video").setAttribute("src", document.getElementById("m3u8_vod_src").value) }
