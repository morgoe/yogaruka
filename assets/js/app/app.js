$(document).ready(function() {
  sendGoogleAnalyticsPageView();
  initExternalLinks();
  initCarousels();
  initModals();
  expandSVGs();
  $(window).on('resize', resizeHomeVideo).resize();
});