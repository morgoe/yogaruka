/* Timetable Filtering */
$('.js-timetable-filter').click(function() {
	$(this).toggleClass('now-active');
	$('.Timetable').addClass('now-filtered');

	var filters = [];
	$('.Timetable-filter.now-active').each(function() {
		var _filters = $(this).data('filter').split(' ');
		_filters.splice(-1, 1);
		_filters.forEach(function(_filter) {
			filters.push(_filter);
		});
	});

	var rows = $('.Timetable-schedule .flexTable-body .flexTable-row');
	rows.each(function() {	
		var ids = $(this).data('id').split(' ');
		ids.splice(-1, 1);

		if (filters.length) {
			var show = false;
			filters.forEach(function(filter) {
				ids.forEach(function(id) {
					if (id === filter) {
						show = true;
					}
				});
			});
			if (show)
				$(this).show();
			else
				$(this).hide();
		} else {
			$(this).show();
		}
	});
});