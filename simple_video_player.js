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
