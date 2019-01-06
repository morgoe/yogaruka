$(document).ready(function() {
	InstantClick.on('change', function() {
		$(window).off('resize', initMasonry);

		sendGoogleAnalyticsPageView();
		initExternalLinks();
		initCarousels();
		expandSVGs();
		imageZoom();
		initVideoScrubbers();
		$(window).on('resize', initMasonry).resize();
	});

	InstantClick.init();
});