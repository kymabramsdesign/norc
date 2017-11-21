// Initialize the full page slider for landing pages
function activateSlider() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '.dot-nav',
    anchors: ['ar'],
    navigation: false,

    //Scrolling
    scrollingSpeed: 400,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    loopHorizontal: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    interlockedSlides: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    paddingTop: '0',
    paddingBottom: '0',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(){},
    afterLoad: function(){},
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(){},
    afterSlideLoad: function(){
      $('.section-title').removeClass('current').show();
      var whichSlide = $('body').attr('class'); // gets the current slide
      whichSlide = whichSlide.replace('main fp-viewing-ar-', '');
      $('.section-title').hide();
      $('.section-title.' + whichSlide).show().css('color', 'rgba(255,255,255,.85)');
    },
    onSlideLeave: function(){}
  });
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
    else if ( location.indexOf('leadership-dot') >= 0 ) {
      $('.section-title.leadership').fadeIn(300);
      $(this).on('click', function() {
        $('.section-title.leadership').css('color', 'rgba(255,255,255,.85)');
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

function checkBrowser() {
  var isChromium = !!window.chrome;
  if ( isChromium === true ) {
    $('.main p, .area .h2 p, .main .section-title').css('font-weight', '300');
  }
}

// Collect all functions to execute at once on Load
function initialize() {
  checkBrowser()
  activateSlider();
  dotNav();
}

// Collect all functions to execute on Resize
function initializeResize() {
}


$(document).ready(initialize);
$(window).resize(initializeResize);
