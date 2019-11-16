$(document).ready(function() {
	// InstantClick.on('change', function() {
		sendGoogleAnalyticsPageView();
		initExternalLinks();
    initCarousels();
    initModals();
		expandSVGs();
		$(window).on('resize', resizeHomeVideo).resize();
	// });

	// InstantClick.init();
});