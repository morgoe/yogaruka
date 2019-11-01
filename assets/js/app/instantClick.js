$(document).ready(function() {
	InstantClick.on('change', function() {
		sendGoogleAnalyticsPageView();
		initExternalLinks();
    initCarousels();
    initModals();
		expandSVGs();
		imageZoom();
		initVideoScrubbers();
		$(window).on('resize', resizeHomeVideo).resize();
	});

	InstantClick.init();
});