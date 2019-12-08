$(document).on('click', '.js-scrollTo', function() {
	$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top }, 700);
});