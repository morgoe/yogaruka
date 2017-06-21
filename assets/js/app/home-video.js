/* Home Video Sizing */
function resizeHomeVideo() {
	if ($(window).width()*.5625 > $(window).height()) {
		$('.Home-video').css('width', '100%').css('height', 'auto');
	} else {
		$('.Home-video').css('height', '100%').css('width', 'auto');
	}
}
if ($('body').attr('id') === 'home') {
	$(window).resize(function () {
		resizeHomeVideo();
	}).resize();
}