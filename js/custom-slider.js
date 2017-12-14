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
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.nav-arrow.prev').show();
      $('.slider').animate({ left: slide2 }, 300);
      $('.president').show().addClass('active');
      window.location.hash = 'president';
    }
    else if ( currentSlidePosition === slide2 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide3 }, 300);
      $('.economics').show().addClass('active');
      window.location.hash = 'economics';
    }
    else if ( currentSlidePosition === slide3 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide4 }, 300);
      $('.education').show().addClass('active');
      window.location.hash = 'education';
    }
    else if ( currentSlidePosition === slide4 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide5 }, 300);
      $('.global').show().addClass('active');
      window.location.hash = 'global';
    }
    else if ( currentSlidePosition === slide5 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide6 }, 300);
      $('.health').show().addClass('active');
      window.location.hash = 'health';
    }
    else if ( currentSlidePosition === slide6 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide7 }, 300);
      $('.society').show().addClass('active');
      window.location.hash = 'society';
    }
    else if ( currentSlidePosition === slide7 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide8 }, 300);
      $('.nav-arrow.next').hide();
      $('.gain-more').show().addClass('active');
      window.location.hash = 'gain-more';
    }
  });

  // Functions for click on left arrow
  $('.nav-arrow.prev').click( function() {
    var currentSlidePosition = $('.slider').offset().left;

    if ( currentSlidePosition === slide2 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.nav-arrow.prev').hide();
      $('.slider').animate({ left: slide1 }, 300);
      $('.insight').show().addClass('active');
      window.location.hash = 'insight';
    }
    else if ( currentSlidePosition === slide3 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide2 }, 300);
      $('.president').show().addClass('active');
      window.location.hash = 'president';
    }
    else if ( currentSlidePosition === slide4 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide3 }, 300);
      $('.economics').show().addClass('active');
      window.location.hash = 'economics';
    }
    else if ( currentSlidePosition === slide5 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide4 }, 300);
      $('.education').show().addClass('active');
      window.location.hash = 'education';
    }
    else if ( currentSlidePosition === slide6 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide5 }, 300);
      $('.global').show().addClass('active');
      window.location.hash = 'global';
    }
    else if ( currentSlidePosition === slide7 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide6 }, 300);
      $('.health').show().addClass('active');
      window.location.hash = 'health';
    }
    else if ( currentSlidePosition === slide8 ) {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.slider').animate({ left: slide7 }, 300);
      $('.nav-arrow.next').show();
      $('.society').show().addClass('active');
      window.location.hash = 'society';
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
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide1 }, 200);
        $('.insight').show().addClass('active');
        $('.nav-arrow.next').show();
        $('.nav-arrow.prev').hide();
      });
    }
    else if ( location.indexOf('president-dot') >= 0 ) {
      $('.section-title.president').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide2 }, 200);
        $('.president').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('economics-dot') >= 0 ) {
      $('.section-title.economics').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide3 }, 200);
        $('.economics').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('education-dot') >= 0 ) {
      $('.section-title.education').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide4 }, 200);
        $('.education').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else  if ( location.indexOf('global-dot') >= 0 ) {
      $('.section-title.global').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide5 }, 200);
        $('.global').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('health-dot') >= 0 ) {
      $('.section-title.health').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide6 }, 200);
        $('.health').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('society-dot') >= 0 ) {
      $('.section-title.society').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide7 }, 200);
        $('.society').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('more-dot') >= 0 ) {
      $('.section-title.gain-more').fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
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

  // Moves the slide to the correct location via hash
  var hash = location.hash.substr(1);
  if ( hash === '') {
    // do nothing, just start on the first slide
  }
  else if ( hash === 'president') {
    $('.slider').animate({ left: slide2 }, 400);
    $('.section-title').hide();
    $('.nav-dot, .section-title, .slide').removeClass('active');
    $('.nav-arrow').show();
    $('.president').show().addClass('active');
  }
  else if ( hash === 'economics') {
    $('.slider').animate({ left: slide3 }, 525);
    $('.section-title').hide();
    $('.nav-dot, .section-title, .slide').removeClass('active');
    $('.nav-arrow').show();
    $('.economics').show().addClass('active');
  }
  else if ( hash === 'education') {
    $('.slider').animate({ left: slide4 }, 650);
    $('.section-title').hide();
    $('.nav-dot, .section-title, .slide').removeClass('active');
    $('.nav-arrow').show();
    $('.education').show().addClass('active');
  }
  else if ( hash === 'global') {
    $('.slider').animate({ left: slide5 }, 775);
    $('.section-title').hide();
    $('.nav-dot, .section-title, .slide').removeClass('active');
    $('.nav-arrow').show();
    $('.global').show().addClass('active');
  }
  else if ( hash === 'health') {
    $('.slider').animate({ left: slide6 }, 900);
    $('.section-title').hide();
    $('.nav-dot, .section-title, .slide').removeClass('active');
    $('.nav-arrow').show();
    $('.health').show().addClass('active');
  }
  else if ( hash === 'society') {
    $('.slider').animate({ left: slide7 }, 1025);
    $('.section-title').hide();
    $('.nav-dot, .section-title, .slide').removeClass('active');
    $('.nav-arrow').show();
    $('.society').show().addClass('active');
  }
  else if ( hash === 'gain-more') {
    $('.slider').animate({ left: slide8 }, 1150);
    $('.section-title').hide();
    $('.nav-dot, .section-title, .slide').removeClass('active');
    $('.nav-arrow.next').hide();
    $('.nav-arrow.prev').show();
    $('.gain-more').show().addClass('active');
  }
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

// On Scroll functions
function scrollTime() {
  $('.area').on('scroll', function() {
    var text = $('.active .area .landing-text').offset().top;
    var thumb = $('.active .area .thumbnails').offset().top;

    console.log(thumb);

    if ( text <= -80 ) {
      $(this).addClass('scrolled');
      $(this).find('.grey-box').addClass('scrolled');
    }
    else {
      if ( $('.landing-text').hasClass('button-scrolled') === false ) {
        $(this).removeClass('scrolled');
        $(this).find('.grey-box').removeClass('scrolled');
      }
    }
  });
}

// Bottom Arrow Functions
function explore() {
  $('.down-arrow').hover( function() {
    $('.explore').css('color', '#fff');
  }, function() {
    $('.explore').css('color', 'rgba(255,255,255,.65)');
  });

  $('.down-arrow').click( function() {
    
    $('.active .area').addClass('scrolled');
    $('.active .area .grey-box').addClass('scrolled');
    $('.active .area .landing-text').addClass('button-scrolled');
    // $('.active .area .thumbnails').css('display', 'flex');
    // $( ".active .area .thumbnails" ).offset({ top: 95 });
    // $('.active .area .thumbnails').animate({
    //   "margin-top": "-100"
    // }, 400);
var thumb = $('.active .area .thumbnails').offset().top; //gets position of thumbnails section
console.log($('.active .area .thumbnails').scrollHeight);
  });
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
  explore();
  matchHeight();
  slides();
  scrollTime();
}

// Collect all functions to execute on Resize
function initializeResize() {
  verticalPosition();
  matchHeight();
  slides();
}

$(document).ready(initialize);
$(window).resize(initializeResize);
