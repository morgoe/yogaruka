/* Jump To */
var clickedScrollspy = false;
var scrollspyHeight = 44;

$('body').scrollspy({
	target: '.js-jumpTo-wrapper',
	offset: (scrollspyHeight + 20)
});

function toggleScrollspyVisibility() {
	if ($('#jumpTo-setting').length === 0)
		return;
	if ($('body').scrollTop() - $('#jumpTo-setting').offset().top > -(scrollspyHeight + 20)) {
		$('.js-jumpTo-wrapper').addClass('show');
	} else {
		$('.js-jumpTo-wrapper').removeClass('show');
	}
}

function scrollToActive(target) {
	var wrapper = $('.js-jumpTo-wrapper');
	var nav = wrapper.find('.nav');
	var depth = target.offset().left + nav.scrollLeft() - wrapper.width()/2 + target.width()/2;
	nav.animate({
		scrollLeft: depth
	}, 200);
	setTimeout(function() {
		clickedScrollspy = false;
	}, 1000);
}

$('.js-jumpTo-wrapper').on('activate.bs.scrollspy', function () {
	if (clickedScrollspy === false)
		scrollToActive($('.js-jumpTo-wrapper .active'));
	toggleScrollspyVisibility();
})

$('.js-jumpTo').click(function(e) {
	e.preventDefault();
	var target = $(this).attr('href');
	target = $(target);
	var depth = target.offset().top - (scrollspyHeight + 10);
	$('html, body').animate({
		scrollTop: depth
	}, 1000);
	clickedScrollspy = true;
	scrollToActive($(this));
});

toggleScrollspyVisibility();