$(document).ready(function() {
  sendGoogleAnalyticsPageView();
  initExternalLinks();
  initCarousels();
  initModals();
  initAccordions();
  expandSVGs();
  $(window).on('resize', resizeHomeVideo).resize();
});