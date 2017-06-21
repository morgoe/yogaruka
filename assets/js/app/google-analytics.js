/* Google Analytics */
ga('create', 'UA-63372069-3', 'auto');
ga('send', 'pageview');

// Send an event on page exit, so that time is tracked properly for bounce pages.
var numPagesVisited = 0;
window.onbeforeunload = function(){
	ga('send', 'event', 'time-tracking', 'page-exit');
	if (numPagesVisited === 1)
		ga('send', 'event', 'engagement', 'page-bounce');
}

// Click on "Pay" button
$('.js-buyRetreat').click(function() {
	ga('send', 'event', 'engagement', 'click-retreat-buy-button', $(this).attr('data-retreat'));
});	

// Track scroll depth
jQuery(function() {
	jQuery.scrollDepth();
});