var videoPlayer;

document.addEventListener("DOMContentLoaded", function() {initVideoPlayer();});

function initVideoPlayer() {
	videoPlayer = document.getElementById('media-video');

	videoPlayer.controls = false;

	videoPlayer.addEventListener('timeupdate', updateProgressBar);

	videoPlayer.addEventListener('ended', function() {
		var playPauseButton = document.getElementById('play-pause-button');

		setButtonType(playPauseButton, 'replay');
	});

	videoPlayer.addEventListener('volumechange', function(ev) {
		var muteButton = document.getElementById('mute-button');

		if (videoPlayer.muted) {
			setButtonType(muteButton, 'mute');
		} else {
			setButtonType(muteButton, 'unmute');
		}
	});
}


function setButtonType(button, value) {
	button.title = value;

	button.className = value;
}


function togglePlayPause() {
	var button = document.getElementById('play-pause-button');

	if (videoPlayer.paused || videoPlayer.ended) {
		setButtonType(button, 'pause');

		videoPlayer.play();
	} else {
		setButtonType(button, 'play');

		videoPlayer.pause();
	}
}

// function changeLocale() {
// 	var correntLocale = document.getElementById('play-pause-button');
// 	if (videoPlayer.paused || videoPlayer.ended) {
// 		document.getElementById('play-pause-button').style.background-Image="url(../fonts/play.png)";
// 	} else {
// 		document.getElementById('play-pause-button').style.background-image="url(../fonts/pause.png)";
// 	}
// }

function stopPlayer() {
	videoPlayer.pause();

	videoPlayer.currentTime = 0;

	playPauseButton = document.getElementById('play-pause-button');

	setButtonType(playPauseButton, 'play');
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
		setButtonType(muteButton, 'unmute');

		videoPlayer.muted = false;
	} else {
		setButtonType(muteButton, 'mute');

		videoPlayer.muted = true;
	}
}

<<<<<<< HEAD

function resetPlayer() {
	videoPlayer.currentTime = 0;

	var playPauseButton = document.getElementById('play-pause-button');

	setButtonType(playPauseButton, ' ')

	var progressBar = document.getElementById('progress-bar');

	progressBar.value = 0;

	progressBar.innerHTML = '0% played';
}


function replayVideo() {
	resetPlayer();

	videoPlayer.play();
}


=======
>>>>>>> 2ebe27da5248c979403b3e22c4877bfb1bcf7f75
function updateProgressBar() {
	var progressBar = document.getElementById('progress-bar');
	var progressPercent = document.getElementById('progress-percent');
	var percentage = Math.floor((100 / videoPlayer.duration) * videoPlayer.currentTime);

	progressBar.value = percentage;

	progressBar.innerHTML = percentage + '% played';
	progressPercent .innerHTML = percentage + '% played';
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
