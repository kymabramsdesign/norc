var columns = function() {
  var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var leftOffset = $('.left-50').offset().top;
  var leftHeight = $('.left-50').height();
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();
  // var bottomPosition = leftHeight - windowHeight;

  if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
    $('.left-50').css({
      'position': 'fixed',
      'bottom': 0
    });
  }

  $(window).on( 'scroll', function() {
    var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();

    if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
      $('.left-50').css({
        'position': 'fixed',
        'bottom': 0
      });
    }

    if ( (windowHeight + scrollPosition) <= (leftHeight + leftOffset) ) {
      $('.left-50').css({
        'position': 'absolute',
        'bottom': 'initial'
      });
    }

  });

  // alert(windowHeight);
  // alert(leftHeight);
  // alert(leftBottom);
  // alert(scrollPosition+windowHeight);
  // alert(leftOffset);
}

$(document).ready(columns);
$(window).resize(columns);

