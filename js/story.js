var columns = function() {
  var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var leftOffset = $('.left-50').offset().top;
  var leftHeight = $('.left-50').height();
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();

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
}

var subNav = function() {
  var navHeight = $('.sub-nav').height();

  if ( navHeight >= 35 && navHeight < 60 ) {
    $('.story-content').css('margin-top', '128px');
  }
  else if ( navHeight >= 60 ) {
    $('.story-content').css('margin-top', '145px');
  }
  else {
    $('.story-content').css('margin-top', '114px');
  }
}

$(document).ready(columns);
$(document).ready(subNav);
$(window).resize(subNav);

$(window).resize(function() {
  var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var leftOffset = $('.left-50').offset().top;
  var leftHeight = $('.left-50').height();
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();

  if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
    $('.left-50').css({
      'position': 'fixed',
      'bottom': 0
    });
  }
});



