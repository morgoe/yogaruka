function initMasonry() {
	if ($('.js-masonry').length) {
		var colWidth = $('.js-masonry .grid-item').outerWidth();
		$('.js-masonry').masonry({
			itemSelector: '.grid-item',
			columnWidth: colWidth,
			transitionDuration: 0
		});
	}
}