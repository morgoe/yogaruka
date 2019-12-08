function initCarousels() {
	$('.carousel-frame').each(function() {
		// var $figure = $('.carousel-frame').closest('.carousel-figure');
		var $frame = $(this);
		var $scrollbar = $(this).find('.carousel-scrollbar');

		var sly = new Sly($frame, {
			horizontal: 1,
			itemNav: 'centered',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $scrollbar,
			scrollBy: 1,
			speed: 800,
			elasticBounds: 1,
			easing: 'easeOutExpo',
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1,
			cycleBy: 'items',
			cycleInterval: 30000,
			pauseOnHover: 1,
		}).init();

		// sly.on('pause', function() {
		// 	sly.set('cycleBy', null);
		// });

		// function setMaxCaptionHeight() {
		// 	var $caption = $figure.find('> figcaption').height('auto');
		// 	var h = 0;
			
		// 	$figure.find('.js-carouselItemCaption').each(function() {
		// 		$figure.find('.js-carouselCaption').text($(this).text());
		// 		if ($figure.find('.js-carouselCaption').height() > h)
		// 			h = $figure.find('.js-carouselCaption').height();
		// 	});
			
		// 	$figure.find('.js-carouselCaption').text($figure.find('.js-carouselItemCaption').eq(0).text());
		// 	$caption.height(h);
		// }

		// if ($figure.find('.js-carouselCaption').length) {
		// 	setMaxCaptionHeight();

		// 	sly.on('move', function(eventName, itemIndex) {
		// 		var itemIndex = Math.round(sly.pos.dest / sly.pos.end * (sly.items.length-1));
		// 		$figure.find('.js-carouselCaption').text($figure.find('.carousel-listItem').eq(itemIndex).find('.js-carouselItemCaption').text());
		// 	});
		// }

		$(window).resize(function() {
			sly.reload();	
			// if ($figure.find('.js-carouselCaption').length) {
			// 	setMaxCaptionHeight();
			// }
		});
	});
}