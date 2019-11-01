/* Home Video Sizing */
function resizeHomeVideo() {
  if ($('body').attr('id') === 'home') {
    var video = $('.Page-video');
    var videoWrapper = $('.Page-videoWrapper');
    console.log(videoWrapper.width()*.5625, videoWrapper.height(), videoWrapper.width()*.5625 > videoWrapper.height())

  	if (videoWrapper.width()*.5625 > videoWrapper.height()) {
  		video.css('width', '100%').css('height', 'auto');
  	} else {
  		video.css('height', '100%').css('width', 'auto');
  	}
  }
}