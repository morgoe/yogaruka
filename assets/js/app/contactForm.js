$(document).ready(function() {

	/* Formspree Contact Form */
	$(document).on('click', '#contactForm-submit', function(e){
		e.preventDefault(); // prevent the form to do the post.

		var contactForm = $("#contactForm"),
			inputName = $("#contactForm-name"),
			inputEmail = $("#contactForm-email"),
			inputMessage = $("#contactForm-message"),
			sendButton = $("#contactForm-submit"),
			formFeedback = $("#contactForm-feedback");

		sendButton.text("Sending...");

		var xhr = new XMLHttpRequest();
		xhr.open('POST', '//formspree.io/hello@morgancarter.com.au', true);
		xhr.setRequestHeader("Accept", "application/json")
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

		xhr.send(
			"name=" + inputName.val() +
			"&email=" + inputEmail.val() +
			"&message=" + inputMessage.val());

		xhr.onloadend = function (res) {
			if (res.target.status === 200){
				contactForm.addClass('now-hidden');
				formFeedback.removeClass('now-hidden').html('Thanks for contacting me!<br> I\'ll be in touch within a couple of days.').addClass('bg-green');
			}
			else {
				contactForm.addClass('now-hidden');
				formFeedback.removeClass('now-hidden').text('Something went wrong. Please double check your details.').addClass('bg-red');

				setTimeout(function() {
					resetForm()
				}, 2000);
			}
		}
			
		function resetForm() {
			inputName.val('').removeClass('is-notEmpty');
			inputEmail.val('').removeClass('is-notEmpty');
			inputMessage.val('').removeClass('is-notEmpty');

			sendButton.text("Submit");
			
			contactForm.removeClass('now-hidden');
			formFeedback.addClass('now-hidden').removeClass('bg-red').removeClass('bg-green');
		}
	});
});