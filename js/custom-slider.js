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

  // move slide on click right arrow
  $('.nav-arrow.next').click( function() {
    goLeft();
  });

  // move slide on click left arrow
  $('.nav-arrow.prev').click( function() {
    goRight();
  });

  // move slide on Swipe Left
  $('.slide').on( 'swipeleft', function() {
    goLeft();
  });

  // move slide on swipe right
  $('.slide').on( 'swiperight', function() {
    goRight();
  });


  $('.dot-nav svg').hover(function() {

    $('.section-title').hide().css('color', 'rgba(255,255,255,.65)');

    var location = $(this).attr('class'); // Gets which dot you are hovering on
    location = location.replace('nav-dot ', '');
    locationTrim = location.replace('-dot', '');

   if ( location.indexOf('insight-dot') >= 0 ) {
      $('.section-title.insight').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide1 }, 200);
        $('.insight').show().addClass('active');
        $('.nav-arrow.next').show();
        $('.nav-arrow.prev').hide();
      });
    }
    else if ( location.indexOf('president-dot') >= 0 ) {
      $('.section-title.president').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide2 }, 200);
        $('.president').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('economics-dot') >= 0 ) {
      $('.section-title.economics').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide3 }, 200);
        $('.economics').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('education-dot') >= 0 ) {
      $('.section-title.education').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide4 }, 200);
        $('.education').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else  if ( location.indexOf('global-dot') >= 0 ) {
      $('.section-title.global').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide5 }, 200);
        $('.global').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('health-dot') >= 0 ) {
      $('.section-title.health').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide6 }, 200);
        $('.health').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('society-dot') >= 0 ) {
      $('.section-title.society').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.slider').animate({ left: slide7 }, 200);
        $('.society').show().addClass('active');
        $('.nav-arrow').show();
      });
    }
    else if ( location.indexOf('more-dot') >= 0 ) {
      $('.section-title.gain-more').stop(true,true).fadeIn(300);
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

  function goLeft() {
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
  }

  function goRight() {
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
  }
}


function verticalPosition() {
  var windowHeight = $(window).height();
  var areaHeight = $('.area p').height();
}

// image heights
function matchHeight() {
  var largeSize = $('.one-vertical img').height();
  largeSize = largeSize+7;

  $('.two-vertical').css('height', largeSize);
  $('.desktop-video .four, .mobile-video .four').css('height', largeSize);
  $('.president .two-vertical').css('height', (largeSize/2));
  $('.gain-more .two-vertical.first').css('height', (largeSize/2));
}


// On Scroll functions
function scrollTime() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  if ( windowWidth >= 768 ) {

    $('.economics .area, .education .area, .global .area, .health .area, .society .area').on('scroll', function() {
      var text = $('.active .area .landing-text p').offset().top;
      var thumb = $('.active .area .thumbnails').offset().top;
      var thumbsHeight = $('.active .area .thumbnails').innerHeight();

      if ( thumb === windowHeight ) {
        $(this).find('.bottom-arrow').stop().delay(50).fadeIn(600);

      }
      else if ( (thumb-10) <= (windowHeight-thumbsHeight) ) {
        $(this).find('.bottom-arrow').stop().delay(100).fadeIn(600);
      }
      else {
        $(this).find('.bottom-arrow').hide();
      }

      if ( text <= 100 ) {
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
}

// Bottom Arrow Functions
function explore() {
  $('.down-arrow').hover( function() {
    $('.explore').css('color', '#fff');
  }, function() {
    $('.explore').css('color', 'rgba(255,255,255,.75)');
  });

  var elem = 0;
  var topPos = 0;

  $('.down-arrow').click( function() {
    if ( $('.slide.active').hasClass('education') ) {
      elem = document.getElementById("ed");
      topPos = elem.offsetTop;

      if ( $('.slide.active .area').hasClass('scrolled') ) {
        scrollTo(document.getElementById('ed-contain'), -topPos, 600);
      } else {
        scrollTo(document.getElementById('ed-contain'), topPos-95, 400);
      }
    }
    else if ( $('.slide.active').hasClass('economics') ) {
      elem = document.getElementById("econ");
      topPos = elem.offsetTop;
      
      if ( $('.slide.active .area').hasClass('scrolled') ) {
        scrollTo(document.getElementById('econ-contain'), -topPos, 600);
      } else {
        scrollTo(document.getElementById('econ-contain'), topPos-95, 400);
      }
    }
    else if ( $('.slide.active').hasClass('global') ) {
      elem = document.getElementById("glo");
      topPos = elem.offsetTop;
      
      if ( $('.slide.active .area').hasClass('scrolled') ) {
        scrollTo(document.getElementById('glo-contain'), -topPos, 600);
      } else {
        scrollTo(document.getElementById('glo-contain'), topPos-95, 400);
      }
    }
    else if ( $('.slide.active').hasClass('health') ) {
      elem = document.getElementById("heal");
      topPos = elem.offsetTop;
      
      if ( $('.slide.active .area').hasClass('scrolled') ) {
        scrollTo(document.getElementById('heal-contain'), -topPos, 600);
      } else {
        scrollTo(document.getElementById('heal-contain'), topPos-95, 400);
      }
    }
    else if ( $('.slide.active').hasClass('society') ) {
      elem = document.getElementById("soc");
      topPos = elem.offsetTop;
      
      if ( $('.slide.active .area').hasClass('scrolled') ) {
        scrollTo(document.getElementById('soc-contain'), -topPos, 600);
      } else {
        scrollTo(document.getElementById('soc-contain'), topPos-95, 400);
      }
    }

    $('.active .area').addClass('scrolled');
    $('.active .area .grey-box').addClass('scrolled');

    return false;
  });
      
  function scrollTo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;
        
    var animateScroll = function(){        
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };
}

// Special scroll Action for the President's Essay Page
function presidentEssay() {
  $('.president a').click( function(essay) {
    essay.preventDefault();
  });

  var imageHeight = $('.president .one-vertical img').height();
  imageHeight = imageHeight-7; // Height of large images
  var dataPointHeight = imageHeight/2; // Height of small images
  var columnHeight = (imageHeight*2) + (dataPointHeight*3); // Height of all images on the President slide

  columnHeight = columnHeight+132; // Add room for text and vertical spacing here

  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  if ( windowWidth >= 901 ) {
    $('.president .area, .gain-more .area').on('scroll', function() {
      var thumb = $('.active .area .landing-text').offset().top;

      if ( thumb <= 100 ) {
        $(this).addClass('scrolled');
        $(this).find('.grey-box').addClass('scrolled');
      }
      else {
        if ( $('.landing-text').hasClass('button-scrolled') === false ) {
          $(this).removeClass('scrolled');
          $(this).find('.grey-box').removeClass('scrolled');
        }
      }

      if ( (windowHeight-columnHeight) >= thumb+80 ) {
        $('.president .thumbnails').css('position', 'fixed');
        $('.president .landing-text').css('margin-left', '50vw');
      }
      else {
        $('.president .thumbnails').css('position', 'initial');
        $('.president .landing-text').css('margin-left', 'initial');
      }
    });
  }

  else if ( windowWidth <= 900 && windowWidth >= 768 ) {
    $('.president .area, .gain-more .area').on('scroll', function() {
      var thumb = $('.active .area .thumbnails').offset().top;
      var text = $('.active .area .landing-text').offset().top;
      console.log(thumb);

      if ( thumb <= 75 || text <= 100 ) {
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
}

function landingVideo() {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var buttonOffset = 0;

  // Video iframe resizing
  if ( windowWidth > 1151 ) {
    $('.image-container iframe').css({
      'height': '563px',
      'width': '1000px'
    });
    buttonOffset = (windowHeight - 563)/2;
    $('.home-close').css('margin-top', buttonOffset);
  }
  else if ( windowWidth <= 1150 && windowWidth > 900 ) {
    $('.image-container iframe').css({
      'height': '450px',
      'width': '800px'
    });
    buttonOffset = (windowHeight - 450)/2;
    $('.home-close').css('margin-top', buttonOffset);
  }
  else if ( windowWidth <= 900 && windowWidth > 767) {
    $('.image-container iframe').css({
      'height': '381px',
      'width': '678px'
    });
    buttonOffset = (windowHeight - 381)/2;
    $('.home-close').css('margin-top', buttonOffset);
  }
  else if ( windowWidth <= 767 ) {
    $('.image-container iframe').css({
      'height': '100%',
      'width': '100vw',
      'min-height': '230px'
    });
  }
  
  $('.desktop-video, .mobile-video').on('click', function() {
    $('.image-container').addClass('visible-video');
    $('.white-page-overlay').fadeIn();
  });

  $('.home-close, .close-arrow').on('click', function() {
    $('.image-container').removeClass('visible-video');
    $('.white-page-overlay').fadeOut();
    if ( $('iframe').is(':visible')) {
      $('#welcome-video').attr('src', 'https://www.youtube.com/embed/TNeQXQ42qVA?rel=0&showinfo=1&modestbranding=1');
    }
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
  slides();
  scrollTime();
  presidentEssay();
  landingVideo();
  matchHeight();
  // swipey();
}

// Collect all functions to execute on Resize
function initializeResize() {
  verticalPosition();
  slides();
  presidentEssay();
  landingVideo();
  matchHeight();
}

$(document).ready(initialize);
$(window).resize(initializeResize);
