/* Formspree Contact Form */
function sendContactForm(){
	var contactForm = $("#form-contact")[0],
	inputName = $("#form-name"),
	inputEmail = $("#form-email"),
	inputMessage = $("#form-message"),
	inputReferredBy = $("#form-referred-by"),
	inputSubscribe = $("#form-subscribe"),
	sendButton = $("#form-submit");

	sendButton.text("Sending...");

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '//formspree.io/studio@yogaruka.com', true);
	xhr.setRequestHeader("Accept", "application/json")
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

	ga('send', 'event', 'engagement', 'contact-form-submit');

	xhr.send(
		"name=" + inputName.val() +
		"&email=" + inputEmail.val() +
		"&referredBy=" + inputReferredBy.val() +
		"&subscribe=" + inputSubscribe.is(':checked') +
		"&message=" + inputMessage.val());

	xhr.onloadend = function (res) {
		if (res.target.status === 200){
			$('#form-contact').addClass('has-feedback');
			$('#form-feedback').addClass('success').html('Thanks for contacting us!<br> We’ll be in touch within 24 hours.');

			// Clear form values
			inputName.val('');
			inputEmail.val('');
			inputChoice.val('');
			inputMessage.val('');
		}
		else {
			$('#form-feedback').addClass('error');
			$('#form-feedback').html(res.target.responseText["error"]);
			sendButton.text("Submit");			
			$('#form-feedback').html('Something went wrong.<br> Please double check your details.');
		}
		setTimeout(function() {
			sendButton.text("Submit");
		}, 1000);
	}
}

function validateForm(event) {
	event.preventDefault();
	var $form = $('#form-contact');
	var $formFeedback = $form.find('#form-feedback');

	$formFeedback.removeClass("error").empty(); // Reset validation

	var requiredField = [];
	$form.find('.input').each(function(){
		if ($(this).prop('required')) {
			if (!$(this).val()) {
			  requiredField.push($(this));
			}
		}
	});
	if (requiredField.length) {
		$formFeedback.addClass("error").html('Please fill in your ' + requiredField[0].attr('placeholder').toLowerCase() + '.');
	} else {
		sendContactForm();
	}
}

$('#form-submit').click(function(event) {
	validateForm(event);
});