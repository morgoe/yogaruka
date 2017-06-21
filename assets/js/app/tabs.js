$('.tabs-link').click(function(e) {
	e.preventDefault();
	var target = $(this).attr('href');
	$(this).parent().addClass('active').siblings().removeClass('active');
	$(target).addClass('active').siblings().removeClass('active');
});