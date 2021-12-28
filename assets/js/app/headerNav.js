function initHeaderNav() {
  $('.js-headerNavDropdown').click(function() {
    var dropdown = $(this).closest('.Header-navListItem').find('.Header-dropdown');

    if ($(dropdown).hasClass('is-open')) {
      $(dropdown).removeClass('is-open')
    } else {
      $(dropdown).removeClass('is-open')
      $(dropdown).addClass('is-open')
    }
  });
  $('.js-dropdownGroup').mouseover(function() {
    $(this).addClass('is-hovered')
  }).mouseleave(function() {
    $(this).removeClass('is-hovered')
  });

  $('.js-toggleMobileMenu').click(function() {
    var menu = $('.js-mobileMenu');

    if ($(menu).hasClass('is-open')) {
      $(this).removeClass('is-active')
      $(menu).removeClass('is-open')
    } else {
      $(this).addClass('is-active')
      $(menu).removeClass('is-open')
      $(menu).addClass('is-open')
    }

  })
}