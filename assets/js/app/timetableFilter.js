(function(){
  var originallog = console.log;

  console.log = function(txt) {
    if(txt.includes('[momoyoga] Creating section for')) {
      const target = $('.js-timetableFilter.is-active').attr('target');
      if (target !== 'all') filterClasses(target)
    }

    originallog.apply(console, arguments);
  }
})();

function filterClasses(target) {
  $('.momoyoga-lesson').removeClass('is-active');
  $('.momoyoga-schedule').addClass('is-filtered')
  if (target === 'russell-lea') {
    $('.momoyoga-schedule').find('p:contains(Russell Lea)').parent().parent().addClass('is-active');  
  } else if (target === 'alexandria') {
    $('.momoyoga-schedule').find('p:contains(Alexandria)').parent().parent().addClass('is-active');  
  } else if (target === 'online') {
    $('.momoyoga-schedule').find('p:contains(Zoom)').parent().parent().addClass('is-active');  
  }
}

function initTimetableFilter() {
  $('.js-timetableFilter').click(function(e) {
    e.preventDefault();

    $(this).addClass('is-active').siblings().removeClass('is-active');

    var target = $(this).attr('target');
    if (target !== 'all') {
      filterClasses(target)
    } else {
      $('.momoyoga-schedule').removeClass('is-filtered')
    }
  });
}