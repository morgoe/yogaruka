function gtag_report_conversion(id) {
  var callback = function () { };
  gtag('event', 'conversion', {
      'send_to': id,
      'event_callback': callback
  });
  return false;
}

function initConversionTracking() {
  $('.js-conversion-globalCta').click(function() {
    gtag_report_conversion('AW-926048353/WXNcCI3HsMwBEOHAybkD');
  });
  $('.js-conversion-price').click(function() {
    gtag_report_conversion('AW-926048353/FNGZCOfTsMwBEOHAybkD');
  });
  $(document).on('click', '.momoyoga-lesson-action-booknow', function() {
    gtag_report_conversion('AW-926048353/9cQUCKfSsMwBEOHAybkD');
  });
}