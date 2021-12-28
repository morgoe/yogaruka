function initAccordions() {
  $('.js-toggleAccordion').click(function() {
    var accordion = $(this).closest('.accordion');

    if ($(accordion).hasClass('is-open')) {
      $(accordion).parent().find('.accordion').removeClass('is-open')
    } else {
      $(accordion).parent().find('.accordion').removeClass('is-open')
      $(accordion).addClass('is-open')
    }
  });
}