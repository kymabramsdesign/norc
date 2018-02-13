$(document).ready(function() {
  var windowWidth = $(window).width();

  if (windowWidth <= 767 ) {
    $('#fullpage').fullpage({
      anchors: ['home'],
      scrollingSpeed: 400,
      autoScrolling: false,
      loopHorizontal: false,
      scrollOverflow: false,
      animateAnchor: false,
      verticalCentered: false,
      afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
        if ( Cookies.get('intro-shown') == null ) {
        
        // add cookie that expires in one day to site homepage
        Cookies.set('intro-shown', 'yes', { expires: 1, path: '/' });

        // Load Intro Animation JS file
        $.getScript('js/ticker.js');

        }
        else {
          $('#intro-overlay').fadeOut(100); // Hides Intro Animation Overlay
          $('.typed-first, .typed-second, .ti-cursor').remove();
          $('.skip-intro').hide();
        }

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
      },
      afterRender: function(){
        // sizes all the smaller thumbnail images on the homepage
        var largeSize = $('#img-to-measure').height();
        largeSize = largeSize+7;

        $('.two-vertical').css('height', largeSize);
        $('.desktop-video .four, .mobile-video .four').css('height', largeSize);
        $('.president .two-vertical').css('height', (largeSize/2));
        $('.gain-more .two-vertical.first').css('height', (largeSize/2));
      }
    });
  }

  else { 
    $('#fullpage').fullpage({
      anchors: ['home'],
      slidesNavigation: true,
      slidesNavPosition: 'top',
      showActiveTooltip: true,
      menu: true,
      fitToSectionDelay: 600,
      scrollingSpeed: 600,
      autoScrolling: false,
      loopHorizontal: false,
      scrollOverflow: true,
      animateAnchor: false,
      afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
        if ( Cookies.get('intro-shown') == null ) {
        
        // add cookie that expires in one day to site homepage
        Cookies.set('intro-shown', 'yes', { expires: 1, path: '/' });

        // Load Intro Animation JS file
        $.getScript('js/ticker.js');

        }
        else {
          $('#intro-overlay').fadeOut(500); // Hides Intro Animation Overlay
          $('.typed-first, .typed-second, .ti-cursor').remove();
          $('.skip-intro').hide();
        }

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
      },
      afterRender: function(){
        // sizes all the smaller thumbnail images on the homepage
        var largeSize = $('#img-to-measure').height();
        largeSize = largeSize+7;

        $('.two-vertical').css('height', largeSize);
        $('.desktop-video .four, .mobile-video .four').css('height', largeSize);
        $('.president .two-vertical').css('height', (largeSize/2));
        $('.gain-more .two-vertical.first').css('height', (largeSize/2));
      },
      afterResize: function(){
        // re-sizes all the smaller thumbnail images on the homepage
        var largeSize = $('#img-to-measure').height();
        largeSize = largeSize+7;

        $('.two-vertical').css('height', largeSize);
        $('.desktop-video .four, .mobile-video .four').css('height', largeSize);
        $('.president .two-vertical').css('height', (largeSize/2));
        $('.gain-more .two-vertical.first').css('height', (largeSize/2));
      }
    });
  }
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
}

// Collect all functions to execute on Resize
function initializeResize() {
  scrollTime();
}

$(document).ready(initialize);
$(window).resize(initializeResize);
