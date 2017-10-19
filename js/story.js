function columns() {
  var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var leftOffset = $('.left-50').offset().top;
  var leftHeight = $('.left-50').height();
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();
  var subnavHeight = $('.sub-nav').height();
  var rightHeight = $('.right-50').height();

  if ( (rightHeight + 20) < ( windowHeight - (subnavHeight+80)) ) {
    $('.right-50').css({
      'position': 'fixed',
      'top': subnavHeight+80
    });
  } else {
    $('.right-50').css({
      'position': 'absolute',
      'top': 'initial'
    });
  }

  if ( leftHeight <= ( windowHeight - (subnavHeight+80)) ) {
    $('.left-50').css({
      'position': 'fixed',
      'top': subnavHeight+80
    });
  } else if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
    $('.left-50').css({
      'position': 'fixed',
      'bottom': 0
    });
  }

  $(window).on( 'scroll', function() {
    var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();
    var subnavHeight = $('.sub-nav').height();
    var rightHeight = $('.right-50').height();
    var leftHeight = $('.left-50').height();

    if ( rightHeight <= leftHeight ) {
      $('.left-50 .picture img').css('margin-bottom', '-4px');
    } else if ( leftHeight <= ( windowHeight - (subnavHeight+80)) ) {
      $('.left-50').css({
        'position': 'fixed',
        'top': subnavHeight+80
      });
    } else if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
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

// Adjusts the height of the Subnav
function subNav() {
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

function extraResize() {
  var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var leftOffset = $('.left-50').offset().top;
  var leftHeight = $('.left-50').height();
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();
  var subnavHeight = $('.sub-nav').height();

  if ( leftHeight <= ( windowHeight - (subnavHeight+80)) ) {
    $('.left-50').css({
      'position': 'fixed',
      'top': subnavHeight+80
    });
  } else if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
    $('.left-50').css({
      'position': 'fixed',
      'bottom': 0,
      'top': 'inital'
    });
  }
}

//Controls the image/video pop-up preview
function popUpTop () {
  var windowWidth = $(window).width();
  $('.image-container').css('left', -windowWidth);
}

$(".picture").on('click', function() {
  var scrollPosition = $(window).scrollTop();
  var imageSrc = $(this).find('img').attr('src');
  var imageAlt = $(this).find('img').attr('alt');
  var windowHeight = $(window).height();

  $(".page-overlay").fadeIn(300);
  $('.image-container img').show().attr('src', imageSrc).attr('alt', imageAlt);
  $('.image-container').addClass('move-in').append('<img src="img/close.svg" alt="Close" class="close-button" />');

  var thisImageHeight = $('.main-image').innerHeight(); // Get the height of the displayed image
  var currentMargin = $('.image-container.move-in').css('padding-top'); //current container top padding
  currentMargin = parseFloat(currentMargin)*2; // total container top and bottom padding
  var closeMargin = ((windowHeight-thisImageHeight-currentMargin)/2) + 'px'; //gets margin for top of close button

  $('.move-in').css('top', scrollPosition);
  $('.close-button').show().css('margin-top', closeMargin);
  $("body").addClass('no-scroll');
});


// Collect all functions to execute at once on Load
function initialize() {
  columns();
  subNav();
  popUpTop();
}

// Collect all functions to execute on Resize
function initializeResize() {
  columns();
  subNav();
  extraResize();
  popUpTop();
}


$(document).ready(initialize);
$(window).resize(initializeResize);



