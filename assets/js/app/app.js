$(document).ready(function() {
  sendGoogleAnalyticsPageView();
  initExternalLinks();
  initCarousels();
  initModals();
  initAccordions();
  initConversionTracking();
  expandSVGs();
  $(window).on('resize', resizeHomeVideo).resize();
});