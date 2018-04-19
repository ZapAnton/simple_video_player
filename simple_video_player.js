var videoPlayer;

document.addEventListener("DOMContentLoaded", function() {initVideoPlayer();}, false);

function initVideoPlayer() {
	videoPlayer = document.getElementById('media-video');

	videoPlayer.controls = false;
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
