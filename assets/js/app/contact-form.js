/* Formspree Contact Form */
function sendForm(){
	var form = $('#form');
	var formInputs = form.find('input, select, textarea')
	var xhrString = '';
	var sendButton = $('#form-submit');

	for (var i=0; i<formInputs.length; i++) {
		var _this = $(formInputs[i]);
		xhrString += _this.attr('name') + '=' + _this.val();
		if (i < formInputs.length-1) {
			xhrString += '&';
		}
	}

	sendButton.text('Sending...');

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '//formspree.io/studio@yogaruka.com', true);
	xhr.setRequestHeader('Accept', 'application/json')
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

	ga('send', 'event', 'engagement', form.attr('name') + '-form-submit');

	xhr.send(xhrString);

	xhr.onloadend = function (res) {
		if (res.target.status === 200){
			$('#form').addClass('has-feedback');
			$('#form-feedback').addClass('success').html('Thanks for contacting us!<br> We’ll be in touch within 24 hours.');

			// Clear form values
			formInputs.each().val('');
		}
		else {
			$('#form-feedback').addClass('error');
			$('#form-feedback').html(res.target.responseText['error']);
			sendButton.text('Submit');			
			$('#form-feedback').html('Something went wrong.<br> Please double check your details.');
		}
		setTimeout(function() {
			sendButton.text('Submit');
		}, 1000);
	}
}

function validateForm(event) {
	event.preventDefault();
	var $form = $('#form');
	var $formFeedback = $form.find('#form-feedback');

	$formFeedback.removeClass('error').empty(); // Reset validation

	var requiredField = [];
	$form.find('.input').each(function(){
		if ($(this).prop('required')) {
			if (!$(this).val()) {
			  requiredField.push($(this));
			}
		}
	});
	if (requiredField.length) {
		$formFeedback.addClass('error').html('Please fill in your ' + requiredField[0].attr('placeholder').toLowerCase() + '.');
	} else {
		sendForm();
	}
}

$('#form-submit').click(function(event) {
	validateForm(event);
});