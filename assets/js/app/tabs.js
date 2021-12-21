function initTabs() {
  $('.js-tabButton').click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $(this).addClass('is-active').siblings().removeClass('is-active');
    $(target).addClass('is-active').siblings().removeClass('is-active');
  });
}