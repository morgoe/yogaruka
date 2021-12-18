function initTabs() {
  $('.tabs-button').click(function(e) {
    console.log('a')
    e.preventDefault();
    var target = $(this).attr('href');
    $(this).addClass('is-active').siblings().removeClass('is-active');
    $(target).addClass('is-active').siblings().removeClass('is-active');
  });
}