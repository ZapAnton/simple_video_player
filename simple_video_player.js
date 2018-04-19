var simple_video_player;

document.addEventListener("DOMContentLoaded", function() {init_media_player();}, false);

function init_media_player() {
	simple_video_player = document.getElementById('media_video');

	simple_video_player.controls = false;
}
