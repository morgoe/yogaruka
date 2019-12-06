function initAccordions() {
  console.log('aa')
  $('.js-toggleAccordion').click(function() {
    console.log('a')
    var accordion = $(this).closest('.accordion');

    if ($(accordion).hasClass('is-open')) {
      $(accordion).parent().find('.accordion').removeClass('is-open')
    } else {
      $(accordion).parent().find('.accordion').removeClass('is-open')
      $(accordion).addClass('is-open')
    }

  });
}