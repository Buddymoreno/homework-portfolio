$(document).ready(function() {

  $('.readmore').click(function() {
      event.preventDefault();
      $('#show-this-on-click').slideDown()
      $('.readless').show()
      $('.readmore').hide()

    });

    $('.readless').click(function() {
        event.preventDefault();
      $('#show-this-on-click').slideUp()
      $('.readless').hide()
      $('.readmore').show()

    });

    $('.learnmore').click(function() {
      event.preventDefault();
      $('#learnmoretext').slideDown()
      $('.learnmoretext').show()
      $('.learnmore').show()

    });
});

