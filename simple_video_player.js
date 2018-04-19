var videoPlayer;

document.addEventListener("DOMContentLoaded", function() {initVideoPlayer();}, false);

function initVideoPlayer() {
	videoPlayer = document.getElementById('media-video');

	videoPlayer.controls = false;

	videoPlayer.addEventListener('timeupdate', updateProgressBar, false);

	videoPlayer.addEventListener('play', function() {
		var playPauseButton = document.getElementById('play-pause-button');

		setButtonType(playPauseButton, 'pause');
	}, false);

	videoPlayer.addEventListener('pause', function() {
		var playPauseButton = document.getElementById('play-pause-button');

		setButtonType(playPauseButton, 'play');
	}, false);

	videoPlayer.addEventListener('volumechange', function(ev) {
		var muteButton = document.getElementById('mute-button');

		if (videoPlayer.muted) {
			setButtonType(muteButton, 'unmute');
		} else {
			setButtonType(muteButton, 'mute');
		}
	}, false);
}

function setButtonType(button, value) {
	button.title = value;

	button.innerHTML = value;

	button.className = value;
}

function togglePlayPause() {
	var button = document.getElementById('play-pause-button');

	if (videoPlayer.paused || videoPlayer.ended) {
		setButtonType(button, 'pause')

		videoPlayer.play();
	} else {
		setButtonType(button, 'play')

		videoPlayer.pause();
	}
}

function stopPlayer() {
	videoPlayer.pause();

	videoPlayer.currentTime = 0;
}

function changeVolume(direction) {
	if (direction === '+') {
		videoPlayer.volume += (videoPlayer.volume != 1) ? 0.1 : 0;
	} else {
		videoPlayer.volume -= (videoPlayer.volume != 0) ? 0.1 : 0;
	}

	videoPlayer.volume = parseFloat(videoPlayer.volume).toFixed(1);
}

function toggleMute() {
	var muteButton = document.getElementById('mute-button');

	if (videoPlayer.muted) {
		setButtonType(muteButton, 'mute');

		videoPlayer.muted = false;
	} else {
		setButtonType(muteButton, 'unmute');

		videoPlayer.muted = true;
	}
}

function resetPlayer() {
	videoPlayer.currentTime = 0;

	var playPauseButton = document.getElementById('play-pause-button');

	setButtonType(playPauseButton, 'pause')

	var progressBar = document.getElementById('progress-bar');

	progressBar.value = 0;

	progressBar.innerHTML = '0% played';
}

function replayVideo() {
	resetPlayer();

	videoPlayer.play();
}

function updateProgressBar() {
	var progressBar = document.getElementById('progress-bar');

	var percentage = Math.floor((100 / videoPlayer.duration) * videoPlayer.currentTime);

	progressBar.value = percentage;

	progressBar.innerHTML = percentage + '% played';
}

function canPlayVideo(ext) {
	var ableToPlay = videoPlayer.canPlayType('video/' + ext);

	return ableToPlay != '';
}

function loadVideo() {
	for (var i = 0; i < arguments.length; ++i) {
		var fileName = arguments[i].split('.');

		var ext = fileName[fileName.length - 1];

		if (canPlayVideo(ext)) {
			resetPlayer();

			videoPlayer.src = arguments[i];

			videoPlayer.load();

			break;
		}
	}
}
