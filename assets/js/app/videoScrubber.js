function initVideoScrubbers() {
	$('.video').each(function() {
		initVideoScrubber(this);
	});
}

function initVideoScrubber(_video) {
	$(_video).append('<video muted playsinline loop>');

	// Video
	var video = $(_video).find('video')[0],
		scrubber = $(_video).siblings('.video-controls').find('.video-scrubber'),
		prevMouseX = 0,
		nowMouseX = 0,
		curPos = 0,
		deltaPos = 0,
		targetPos = 0,
		catchingUp = false,
		mouseDown = false,
		scrubRequestId,
		playRequestId,
		accelAmount = 0.1,
		frameSnap = 2; // how close to the target frame to be before restarting playback

	// Check if it's still easing into position, and that the user isn't still scrubbing, then start playing the video.
	function startPlayback() {
		if (catchingUp === false && mouseDown === false) {
			video.play();
			playing();
		}
	}

	// As the browser plays the video, update the scrubber's position to track the current time of the video.
	function trackVideo() {
		playRequestId = undefined;
		$('.video-scrubbed').css('transform', 'translateX(' + parseFloat(-100 + 100 * video.currentTime / video.duration) + '%)');
		playing();
	}

	// Now that we know where we are, and where we're going, ease to the target position for both video and scrubber.
	function scrubVideo() {
	    scrubRequestId = undefined;

		prevMouseX += (nowMouseX - prevMouseX) * accelAmount;
		curPos += (targetPos - curPos) * accelAmount;

		video.currentTime = video.duration * curPos;
        $('.video-scrubbed').css('transform', 'translateX(' + parseFloat(-100 + 100*curPos) + '%)');

        if (parseInt(curPos*frameSnap*100) === parseInt(targetPos*frameSnap*100)) {
        	catchingUp = false;
        	startPlayback();
        } else {
        	catchingUp = true;
        	scrubbing();
        }
	}

	// RAF check for scrubVideo()
	function scrubbing() {
	    if (!scrubRequestId) {
	       scrubRequestId = window.requestAnimationFrame(scrubVideo);
	    }
	    if (playRequestId) {
	       window.cancelAnimationFrame(playRequestId);
	       playRequestId = undefined;
	    }
	}

	// RAF check for trackVideo()
	function playing() {
	    if (scrubRequestId) {
	       window.cancelAnimationFrame(scrubRequestId);
	       scrubRequestId = undefined;
	    }
	    if (!playRequestId) {
	       playRequestId = window.requestAnimationFrame(trackVideo);
	    }
	}

	// Track the movement of the mouse, compared to the start position of the mouse, and to the width of the scrubber.
	function handleMouseMove(e) {
		nowMouseX = e.pageX;
		deltaPos = (nowMouseX - prevMouseX) / scrubber.width();
        targetPos = Math.max(0, Math.min(1, curPos + deltaPos));
	}

	// Once the video is completely loaded, start playback and intialise eventListeners.
	function initVideo() {
		startPlayback();
		setTimeout(function() {
			$(_video).removeClass('now-loading');
		}, 100);

		scrubber.on("mousedown", function(e) {
			mouseDown = true;
			prevMouseX = e.pageX;
			nowMouseX = e.pageX;
			curPos = video.currentTime / video.duration;

			video.pause();
			$(window).on("mousemove", function(e) {
				handleMouseMove(e);
				scrubbing();
			});
		});

		$(window).on("mouseup", function() {
			mouseDown = false;
			startPlayback();
			$(window).off('mousemove');
		});
	}

	// Pre-load the video before starting playback, so we get no issues on scrubbing.
	var req = new XMLHttpRequest();
		req.open('GET', $(_video).data('src'), true);
		req.responseType = 'blob';

	req.onload = function() {
	   // Onload is triggered even on 404
	   // so we need to check the status code
	   if (this.status === 200) {
	      var videoBlob = this.response;

	      var vid = URL.createObjectURL(videoBlob); // IE10+
	      // Video is now downloaded
	      // and we can set it as source on the video element
	      video.src = vid;
	      initVideo();
	   }
	}
	req.onerror = function() {
	   // Error
	}

	req.send();

	$('.js-startPlayback').click(function() {
		video.play();
	})
}