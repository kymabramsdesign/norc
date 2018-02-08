$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home'],
    slidesNavigation: true,
    slidesNavPosition: 'top',
    navigationTooltips: ['one', 'two'],
    showActiveTooltip: true,
    menu: true,
    autoScrolling: false,
    loopHorizontal: false,
    scrollOverflow: true,
    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
      var loadedSlide = $(this);

      if (slideIndex == 0) {
        $('.section-title').hide();
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.insight').show().addClass('active');
      }
      else if (slideIndex == 1) {
        $('.section-title').hide();
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.president').show().addClass('active');
      }
      else if (slideIndex == 2) {
        $('.section-title').hide();
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.economics').show().addClass('active');
      }
      else if (slideIndex == 3) {
        $('.section-title').hide();
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.education').show().addClass('active');
      }
      else if (slideIndex == 4) {
        $('.section-title').hide();
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.global').show().addClass('active');
      }
      else if (slideIndex == 5) {
        $('.section-title').hide();
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.health').show().addClass('active');
      }
      else if (slideIndex == 6) {
        $('.section-title').hide();
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.society').show().addClass('active');
      }
      else if (slideIndex == 7) {
        $('.section-title').hide();
        $('.nav-dot, .section-title, .slide').removeClass('active');
        $('.gain-more').show().addClass('active');
      }
    }
  });
});

// Hover over dots Script
function dotHover() {

  $('.fp-slidesNav ul li:nth-of-type(1) a span').hover( function() {
    var hash = location.hash.substr(6);
    if ( hash == 0 ) { 
      // do nothing
    } else {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.insight').stop(true,true).fadeIn().addClass('active');
    }
  }, function() {
    currentSlide();
  });
  $('.fp-slidesNav ul li:nth-of-type(2) a span').hover( function() {
    var hash = location.hash.substr(6);
    if ( hash == 1 ) { 
      // do nothing
    } else {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.president').stop(true,true).fadeIn().addClass('active');
    }
  }, function() {
    currentSlide();
  });
  $('.fp-slidesNav ul li:nth-of-type(3) a span').hover( function() {
    var hash = location.hash.substr(6);
    if ( hash == 2 ) { 
      // do nothing
    } else {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.economics').stop(true,true).fadeIn().addClass('active');
    }
  }, function() {
    currentSlide();
  });
  $('.fp-slidesNav ul li:nth-of-type(4) a span').hover( function() {
    var hash = location.hash.substr(6);
    if ( hash == 3 ) { 
      // do nothing
    } else {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.education').stop(true,true).fadeIn().addClass('active');
    }
  }, function() {
    currentSlide();
  });
  $('.fp-slidesNav ul li:nth-of-type(5) a span').hover( function() {
    var hash = location.hash.substr(6);
    if ( hash == 4 ) { 
      // do nothing
    } else {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.global').stop(true,true).fadeIn().addClass('active');
    }
  }, function() {
    currentSlide();
  });
  $('.fp-slidesNav ul li:nth-of-type(6) a span').hover( function() {
    var hash = location.hash.substr(6);
    if ( hash == 5 ) { 
      // do nothing
    } else {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.health').stop(true,true).fadeIn().addClass('active');
    }
  }, function() {
    currentSlide();
  });
  $('.fp-slidesNav ul li:nth-of-type(7) a span').hover( function() {
    var hash = location.hash.substr(6);
    if ( hash == 6 ) { 
      // do nothing
    } else {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.society').stop(true,true).fadeIn().addClass('active');
    }
  }, function() {
    currentSlide();
  });
  $('.fp-slidesNav ul li:nth-of-type(8) a span').hover( function() {
    var hash = location.hash.substr(6);
    if ( hash == 7 ) { 
      // do nothing
    } else {
      $('.section-title').hide();
      $('.nav-dot, .section-title, .slide').removeClass('active');
      $('.gain-more').stop(true,true).fadeIn().addClass('active');
    }
  }, function() {
    currentSlide();
  });
}

// Get current slide to return the title after hover on Dots
function currentSlide() {
  var hash = location.hash.substr(6);

  $('.section-title').hide();
  $('.nav-dot, .section-title, .slide').removeClass('active');

  if ( hash == 0 ) {
    $('.insight').stop(true,true).fadeIn(800).addClass('active');
  }
  if ( hash == 1 ) {
    $('.president').stop(true,true).fadeIn(800).addClass('active');
  }
  if ( hash == 2 ) {
    $('.economics').stop(true,true).fadeIn(800).addClass('active');
  }
  if ( hash == 3 ) {
    $('.education').stop(true,true).fadeIn(800).addClass('active');
  }
  if ( hash == 4 ) {
    $('.global').stop(true,true).fadeIn(800).addClass('active');
  }
  if ( hash == 5 ) {
    $('.health').stop(true,true).fadeIn(800).addClass('active');
  }
  if ( hash == 6 ) {
    $('.society').stop(true,true).fadeIn(800).addClass('active');
  }
  if ( hash == 7 ) {
    $('.gain-more').stop(true,true).fadeIn(800).addClass('active');
  }
}


// On Scroll functions
function scrollTime() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  if ( windowWidth >= 768 ) {

    $('.president .area, .economics .area, .education .area, .global .area, .health .area, .society .area, .gain-more .area').on('scroll', function() {

      var areaPosition = $(this).scrollTop();
      var areaHeight = $(this).height();
      // console.log(areaHeight);
      // console.log(areaPosition);


      // Explore more button functions
      if ( areaPosition === 0 ) {
        $(this).find('.bottom-arrow').stop().delay(50).fadeIn(600);
      }
      else if ( areaPosition >= 5 ) {
        $(this).find('.bottom-arrow').hide();
      }

      // Top Menu bar functions
      if ( areaPosition >= 75 ) {
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

// Explore More Click Function
function explore() {
  $('.bottom-arrow').on('click', function() {
    var windowHeight = $(window).height();
    var thumbsHeight = $('.active .area .thumbnails').height();
    console.log(thumbsHeight);

    if ( $('.slide.active').hasClass('education') ) {
      
      elem = document.getElementById("ed");

      topPos = elem.offsetTop;

      $(this).find('.area').animate({
        'top': 0
      }, 'slow');
      // scrollTo(document.getElementById('ed-contain'), topPos-95, 400);
console.log(topPos);

      // if ( $('.slide.active .area').hasClass('scrolled') ) {
      //   scrollTo(document.getElementById('ed-contain'), -topPos, 600);
      // } else {
      //   scrollTo(document.getElementById('ed-contain'), topPos-95, 400);
      // }
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
  scrollTime();
  dotHover();
  explore();
}

// Collect all functions to execute on Resize
function initializeResize() {
  scrollTime();
}

$(document).ready(initialize);
$(window).resize(initializeResize);
