// Initialize the full page slider for landing pages




// $('#slides').superslides({
//   hashchange: true,
//   animation_speed: 400
// });




function activateSlider() {
  //     $('.section-title').removeClass('current').show();
  //     var whichSlide = $('body').attr('class'); // gets the current slide
  //     whichSlide = whichSlide.replace('main fp-viewing-ar-', '');
  //     $('.section-title').hide();
  //     $('.section-title.' + whichSlide).show().css('color', 'rgba(255,255,255,.85)');
}

// Functions for the Dot Navigation on Main Pages
function dotNav() {

  $('.dot-nav svg').hover(function() {

    $('.section-title').hide().css('color', 'rgba(255,255,255,.6)');

    var whichSlide = $('body').attr('class');
    whichSlide = whichSlide.replace('main fp-viewing-ar-', '');
    $('.section-title.' + whichSlide).css('color', 'rgba(255,255,255,.85)');

    var location = $(this).attr('class'); // Gets which dot you are hovering on
    location = location.replace('nav-dot ', '');
    locationTrim = location.replace('-dot', '');

    if ( whichSlide === locationTrim ) {
      $('.section-title.' + whichSlide).show();
    }
    else if ( location.indexOf('insight-dot') >= 0 ) {
      $('.section-title.insight').fadeIn(300);
      $(this).on('click', function() {
        $('.section-title.insight').css('color', 'rgba(255,255,255,.85)');
      });
    }
    else if ( location.indexOf('president-dot') >= 0 ) {
      $('.section-title.president').fadeIn(300);
      $(this).on('click', function() {

        $('.section-title.president').css('color', 'rgba(255,255,255,.85)');
      });
    }
    else if ( location.indexOf('economics-dot') >= 0 ) {
      $('.section-title.economics').fadeIn(300);
      $(this).on('click', function() {
        $('.section-title.economics').css('color', 'rgba(255,255,255,.85)');
      });
    }
    else if ( location.indexOf('education-dot') >= 0 ) {
      $('.section-title.education').fadeIn(300);
      $(this).on('click', function() {
        $('.section-title.education').css('color', 'rgba(255,255,255,.85)');
      });
    }
    else  if ( location.indexOf('global-dot') >= 0 ) {
      $('.section-title.global').fadeIn(300);
      $(this).on('click', function() {
        $('.section-title.global').css('color', 'rgba(255,255,255,.85)');
      });
    }
    else if ( location.indexOf('health-dot') >= 0 ) {
      $('.section-title.health').fadeIn(300);
      $(this).on('click', function() {
        $('.section-title.health').css('color', 'rgba(255,255,255,.85)');
      });
    }
    else if ( location.indexOf('society-dot') >= 0 ) {
      $('.section-title.society').fadeIn(300);
      $(this).on('click', function() {
        $('.section-title.society').css('color', 'rgba(255,255,255,.85)');
      });
    }
    else if ( location.indexOf('more-dot') >= 0 ) {
      $('.section-title.gain-more').fadeIn(300);
      $(this).on('click', function() {
        $('.section-title.gain-more').css('color', 'rgba(255,255,255,.85)');
      });
    }
  }, function() {

    var whichSlide = $('body').attr('class'); // gets the current slide
    whichSlide = whichSlide.replace('main fp-viewing-ar-', '');

    $('.section-title').hide().removeClass('current');
    $('.section-title.' + whichSlide).show().addClass('current').css('color', 'rgba(255,255,255,.85)');
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
    $('.explore').css('color', 'rgba(255,255,255,.85)');
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


function slides() {

  var windowWidth = $(window).width();
  var slide1 = 0;
  var slide2 = windowWidth;
  var slide3 = windowWidth*2;
  var slide4 = windowWidth*3;
  var slide5 = windowWidth*4;
  var slide6 = windowWidth*5;
  var slide7 = windowWidth*6;
  var slide8 = windowWidth*7;
  var sliderLocation = $('.slider').offset().left;

  if ( sliderLocation === 0) {
    $('.arrow.prev').hide();
  }
  else if ( sliderLocation === -slide8 ) {
    $('.arrow.next').hide();
  }

  $('.arrow.next').click( function() {
    var currentSlidePosition = $('.slider').offset().left;
    $('.slider').animate({ left: currentSlidePosition-windowWidth }, 300);

    $('.arrow.prev').show();

    if ( currentSlidePosition === -slide7 ) {
      $('.arrow.next').hide();
    }
  });

  $('.arrow.prev').click( function() {
    var currentSlidePosition = $('.slider').offset().left;
    $('.slider').animate({ left: currentSlidePosition+windowWidth }, 300);

    if ( currentSlidePosition === -slide8 ) {
      $('.arrow.next').show();
    } 
    else if ( currentSlidePosition === -slide2 ) {
      $('.arrow.prev').hide();
    }
  });


  var element = $('.slide.society').offset().left;
}

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
  activateSlider();
  dotNav();
  explore();
  matchHeight();
  slides();
}

// Collect all functions to execute on Resize
function initializeResize() {
  verticalPosition();
  matchHeight();
}

$(document).ready(initialize);
$(window).resize(initializeResize);

// gets proper image tile heights on first scroll
// var firstScroll = false;
// $('.slide').scroll( function() {
//    if ( firstScroll !== true ) {
//     firstScroll = true;

//     matchHeight();
//    }
// });
