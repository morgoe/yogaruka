function initModals() {
  $('.js-modal').click(function() {
    var button = $(this);
    var id = button.attr("id");

    $('#modal-' + id).addClass('is-open')
  });

  $('.modal-close, .modal-backdrop').click(function() {
    $('.modal.is-open').removeClass('is-open');
  });
}