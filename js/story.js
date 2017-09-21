var columns = function() {
  var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var leftOffset = $('.left-50').offset().top;
  var leftHeight = $('.left-50').height();
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();
  var bottomPosition = leftHeight - windowHeight;

  if ( (windowHeight + scrollPosition) >= (leftOffset + leftHeight) ) {
    $('.left-50').css({
      'position': 'fixed',
      'bottom': 0,
      'height': 'initial'
    });
  }

  if ( (windowHeight + scrollPosition) < leftBottom ) {
    $('.left-50').css({
      'position': 'initial',
      'bottom': 'initial',
      'height': '100%'
    });
  }

  $(window).on( 'scroll', function() {
    var scrollPosition = $(window).scrollTop();

    if ( (windowHeight + scrollPosition) >= (leftOffset + leftHeight) ) {
      $('.left-50').css({
        'position': 'fixed',
        'bottom': 0,
        'height': 'initial'
      });
    }

    if ( (windowHeight + scrollPosition) < leftBottom ) {
      $('.left-50').css({
        'position': 'initial',
        'bottom': 'initial',
        'height': '100%'
      });
    }

  });

  alert(windowHeight);
  alert(leftHeight);
}

$(document).ready(columns);
$(window).resize(columns);

