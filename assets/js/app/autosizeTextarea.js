$(document).ready(function() {
	autosize($('#contactForm-message'));

	$(document)
		.on('keyup', 'input, textarea', function() {
			if ($(this).val().length)
				$(this).closest('.input-wrapper').addClass('now-notEmpty')
			else
				$(this).closest('.input-wrapper').removeClass('now-notEmpty')
		})
});