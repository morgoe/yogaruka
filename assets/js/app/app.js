$(document).ready(function() {
  sendGoogleAnalyticsPageView();
  initExternalLinks();
  initCarousels();
  initModals();
  initExitModal();
  initAccordions();
  initConversionTracking();
  expandSVGs();
  $(window).on('resize', resizeHomeVideo).resize();
});