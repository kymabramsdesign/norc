// Initialize the full page slider for landing pages
function activateSlider() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '.dot-nav',
    anchors: ['ar'],
    navigation: false,


    //Scrolling
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    loopHorizontal: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,

    //Design
    controlArrows: true,
    verticalCentered: true,
    paddingTop: '0',
    paddingBottom: '10px',
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
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
}

// Functions for the Dot Navigation on Main Pages
function dotNav() {

  //Assigns 'current' to h3 on click of left arrow
  $('.fp-prev').on('click', function() {
    var gere = $('body').attr('class');
    gere = gere.replace('main fp-viewing-ar-', '');

    if ( gere === 'gain-more' ) {
      $('.section-title').removeClass('current');
      $('.section-title.eight').addClass('current');
    }
    else if ( gere === 'leadership' ) {
      $('.section-title').removeClass('current');
      $('.section-title.seven').addClass('current');
    }
    else if ( gere === 'society' ) {
      $('.section-title').removeClass('current');
      $('.section-title.six').addClass('current');
    }
    else if ( gere === 'health' ) {
      $('.section-title').removeClass('current');
      $('.section-title.five').addClass('current');
    }
    else if ( gere === 'global' ) {
      $('.section-title').removeClass('current');
      $('.section-title.four').addClass('current');
    }
    else if ( gere === 'education' ) {
      $('.section-title').removeClass('current');
      $('.section-title.three').addClass('current');
    }
    else if ( gere === 'economics' ) {
      $('.section-title').removeClass('current');
      $('.section-title.two').addClass('current');
    }
    else if ( gere === 'president' ) {
      $('.section-title').removeClass('current');
      $('.section-title.one').addClass('current');
    }
  });

  //Assigns 'current' to h3 on click of right arrow
  $('.fp-next').on('click', function() {
    var gere = $('body').attr('class');
    gere = gere.replace('main fp-viewing-ar-', '');

    if ( gere === 'leadership' ) {
      $('.section-title').removeClass('current');
      $('.section-title.nine').addClass('current');
    }
    else if ( gere === 'society' ) {
      $('.section-title').removeClass('current');
      $('.section-title.eight').addClass('current');
    }
    else if ( gere === 'health' ) {
      $('.section-title').removeClass('current');
      $('.section-title.seven').addClass('current');
    }
    else if ( gere === 'global' ) {
      $('.section-title').removeClass('current');
      $('.section-title.six').addClass('current');
    }
    else if ( gere === 'education' ) {
      $('.section-title').removeClass('current');
      $('.section-title.five').addClass('current');
    }
    else if ( gere === 'economics' ) {
      $('.section-title').removeClass('current');
      $('.section-title.four').addClass('current');
    }
    else if ( gere === 'president' ) {
      $('.section-title').removeClass('current');
      $('.section-title.three').addClass('current');
    }
    else if ( gere === 'insight' ) {
      $('.section-title').removeClass('current');
      $('.section-title.two').addClass('current');
    }
  });


  $('.dot-nav svg').hover(function() {

    // if ( location.indexOf('active') >= 0 ) {
    //   $('.section-title.current').show().css('color', currentColor);
    //   $(this).on('click', function() {
    //     window.location = '/#ar/'+ page;
    //   });
    // }

    $('.section-title').hide().css('color', 'rgba(255,255,255,.6)');
    $('.section-title.current').css('color', 'rgba(255,255,255,.85)');

    var location = $(this).attr('class');
    location = location.replace('nav-dot ', '');

    if ( location.indexOf('insight-dot') >= 0 ) {
      $('.section-title.one').fadeIn(300);
    }
    else if ( location.indexOf('president-dot') >= 0 ) {
      $('.section-title.two').fadeIn(300);
    }
    else if ( location.indexOf('economics-dot') >= 0 ) {
      $('.section-title.three').fadeIn(300);
    }
    else if ( location.indexOf('education-dot') >= 0 ) {
      $('.section-title.four').fadeIn(300);
    }
    else  if ( location.indexOf('global-dot') >= 0 ) {
      $('.section-title.five').fadeIn(300);
    }
    else if ( location.indexOf('health-dot') >= 0 ) {
      $('.section-title.six').fadeIn(300);
    }
    else if ( location.indexOf('society-dot') >= 0 ) {
      $('.section-title.seven').fadeIn(300);
    }
    else if ( location.indexOf('leadership-dot') >= 0 ) {
      $('.section-title.eight').fadeIn(300);
    }
    else if ( location.indexOf('more-dot') >= 0 ) {
      $('.section-title.nine').fadeIn(300);
    }
  }, function() {
    $('.section-title').hide();
    $('.section-title.current').show();
    $('.section-title').css('color', 'rgba(255,255,255,.85)');
  });
}

// Collect all functions to execute at once on Load
function initialize() {
  activateSlider();
  dotNav();
}

// Collect all functions to execute on Resize
function initializeResize() {
}


$(document).ready(initialize);
$(window).resize(initializeResize);
