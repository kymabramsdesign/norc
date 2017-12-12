function slides() {

  var windowWidth = $(window).width();

  // Find location of each slide
  var slide1 = 0;
  var slide2 = -(windowWidth);
  var slide3 = -(windowWidth*2);
  var slide4 = -(windowWidth*3);
  var slide5 = -(windowWidth*4);
  var slide6 = -(windowWidth*5);
  var slide7 = -(windowWidth*6);
  var slide8 = -(windowWidth*7);
  var sliderLocation = $('.slider').offset().left;

  if ( sliderLocation === 0) {
    $('.nav-arrow.prev').hide();
    $('.insight').addClass('active');
  }
  else if ( sliderLocation === slide8 ) {
    $('.nav-arrow.next').hide();
  }

  // Functions for click on right arrow
  $('.nav-arrow.next').click( function() {
    var currentSlidePosition = $('.slider').offset().left;

    if ( currentSlidePosition === slide1 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.nav-arrow.prev').show();
      $('.slider').animate({ left: slide2 }, 300);
      $('.president').show().addClass('active');
    }
    else if ( currentSlidePosition === slide2 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide3 }, 300);
      $('.economics').show().addClass('active');
    }
    else if ( currentSlidePosition === slide3 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide4 }, 300);
      $('.education').show().addClass('active');
    }
    else if ( currentSlidePosition === slide4 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide5 }, 300);
      $('.global').show().addClass('active');
    }
    else if ( currentSlidePosition === slide5 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide6 }, 300);
      $('.health').show().addClass('active');
    }
    else if ( currentSlidePosition === slide6 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide7 }, 300);
      $('.society').show().addClass('active');
    }
    else if ( currentSlidePosition === slide7 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide8 }, 300);
      $('.nav-arrow.next').hide();
      $('.gain-more').show().addClass('active');
    }
  });

  // Functions for click on left arrow
  $('.nav-arrow.prev').click( function() {
    var currentSlidePosition = $('.slider').offset().left;

    if ( currentSlidePosition === slide2 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.nav-arrow.prev').hide();
      $('.slider').animate({ left: slide1 }, 300);
      $('.insight').show().addClass('active');
    }
    else if ( currentSlidePosition === slide3 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide2 }, 300);
      $('.president').show().addClass('active');
    }
    else if ( currentSlidePosition === slide4 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide3 }, 300);
      $('.economics').show().addClass('active');
    }
    else if ( currentSlidePosition === slide5 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide4 }, 300);
      $('.education').show().addClass('active');
    }
    else if ( currentSlidePosition === slide6 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide5 }, 300);
      $('.global').show().addClass('active');
    }
    else if ( currentSlidePosition === slide7 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide6 }, 300);
      $('.health').show().addClass('active');
    }
    else if ( currentSlidePosition === slide8 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title').removeClass('active');
      $('.slider').animate({ left: slide7 }, 300);
      $('.nav-arrow.next').show();
      $('.society').show().addClass('active');
    }
  });

  $('.dot-nav svg').hover(function() {

    $('.section-title').hide().css('color', 'rgba(255,255,255,.65)');

    var location = $(this).attr('class'); // Gets which dot you are hovering on
    location = location.replace('nav-dot ', '');
    locationTrim = location.replace('-dot', '');

   if ( location.indexOf('insight-dot') >= 0 ) {
      $('.section-title.insight').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title').removeClass('active');
        $('.slider').animate({ left: slide1 }, 200);
        $('.insight').show().addClass('active');
        $('.nav-arrow.next').show();
        $('.nav-arrow.prev').hide();
      });
    }
    else if ( location.indexOf('president-dot') >= 0 ) {
      $('.section-title.president').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title').removeClass('active');
        $('.slider').animate({ left: slide2 }, 200);
        $('.president').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('economics-dot') >= 0 ) {
      $('.section-title.economics').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title').removeClass('active');
        $('.slider').animate({ left: slide3 }, 200);
        $('.economics').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('education-dot') >= 0 ) {
      $('.section-title.education').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title').removeClass('active');
        $('.slider').animate({ left: slide4 }, 200);
        $('.education').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else  if ( location.indexOf('global-dot') >= 0 ) {
      $('.section-title.global').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title').removeClass('active');
        $('.slider').animate({ left: slide5 }, 200);
        $('.global').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('health-dot') >= 0 ) {
      $('.section-title.health').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title').removeClass('active');
        $('.slider').animate({ left: slide6 }, 200);
        $('.health').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('society-dot') >= 0 ) {
      $('.section-title.society').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title').removeClass('active');
        $('.slider').animate({ left: slide7 }, 200);
        $('.society').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('more-dot') >= 0 ) {
      $('.section-title.gain-more').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title').removeClass('active');
        $('.slider').animate({ left: slide8 }, 200);
        $('.gain-more').show().addClass('active');
        $('.nav-arrow.prev').show();
        $('.nav-arrow.next').hide();
      });
    }
  }, function() {
    $('.section-title').hide();
    $('.section-title.active').show();
  });
}

function verticalPosition() {
  var windowHeight = $(window).height();
  var areaHeight = $('.area p').height();
}

// image heights
function matchHeight() {
  var largeSize = $('.one-vertical img').height();
  largeSize = largeSize+5;

  $('.two-vertical').css('max-height', largeSize);
}

// Bottom Arrow Functions
function explore() {
  $('.down-arrow').hover( function() {
    $('.explore').css('color', '#fff');
  }, function() {
    $('.explore').css('color', 'rgba(255,255,255,.65)');
  });

  $('.down-arrow').click( function() {
    var tilePosition = $('.thumbnails').offset().top; //gets position of thumbnails section
    tilePosition = tilePosition - 100;

    $('.fp-scrollable').animate({
      scrollTop: tilePosition
    }, 400);
  });
}


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().left;
  var elementBottom = elementTop + $(this).outerWidth();

  var viewportTop = $(window).left;
  var viewportBottom = viewportTop + $(window).width();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$('.slider').on('load', function() {
  $('.slide').each(function() {
      var activeColor = $(this).attr('id');
    if ($(this).isInViewport()) {
      alert('helo');
      $('#fixed-' + activeColor).addClass(activeColor + '-active');
    } else {
      $('#fixed-' + activeColor).removeClass(activeColor + '-active');
    }
  });
});


//Check Browser and adjust font-weights for Chrome
function checkBrowser() {
  var isChromium = !!window.chrome;
  if ( isChromium === true ) {
    $('.main p, .area .h2 p, .main .section-title').css('font-weight', '300');
  }
}

// Collect all functions to execute at once on Load
function initialize() {
  checkBrowser();
  verticalPosition();
  explore();
  matchHeight();
  slides();
}

// Collect all functions to execute on Resize
function initializeResize() {
  verticalPosition();
  matchHeight();
  slides();
}

$(document).ready(initialize);
$(window).resize(initializeResize);
