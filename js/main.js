// Functions for the Dot Navigation on Main Pages
function dotNav() {

  $('.dot-nav svg').hover(function() {
    $('.section-title').hide().css('color', 'rgba(255,255,255,.6)');

    var location = $(this).attr('class');
    location = location.replace('nav-dot ', '');

    if ( location.indexOf('active') >= 0 ) {
      $('.section-title.current').show().css('color', 'rgba(255,255,255,.85)');
      $(this).on('click', function() {
        window.location = '/'+ page;
      });
    }
    else if ( location.indexOf('insight-dot') >= 0 ) {
      $('.section-title.one').fadeIn(300);
      $(this).on('click', function() {
        window.location = '/insight';
      });
    }
    else if ( location.indexOf('president-dot') >= 0 ) {
      $('.section-title.two').fadeIn(300);
      $(this).on('click', function() {
        window.location = '/president';
      });
    }
    else if ( location.indexOf('economics-dot') >= 0 ) {
      $('.section-title.three').fadeIn(300);
      $(this).on('click', function() {
        window.location = '/economics';
      });
    }
    else if ( location.indexOf('education-dot') >= 0 ) {
      $('.section-title.four').fadeIn(300);
      $(this).on('click', function() {
        window.location = '/education';
      });
    }
    else  if ( location.indexOf('global-dot') >= 0 ) {
      $('.section-title.five').fadeIn(300);
      $(this).on('click', function() {
        window.location = '/global';
      });
    }
    else if ( location.indexOf('health-dot') >= 0 ) {
      $('.section-title.six').fadeIn(300);
      $(this).on('click', function() {
        window.location = '/health';
      });
    }
    else if ( location.indexOf('society-dot') >= 0 ) {
      $('.section-title.seven').fadeIn(300);
      $(this).on('click', function() {
        window.location = '/society';
      });
    }
    else if ( location.indexOf('leadership-dot') >= 0 ) {
      $('.section-title.eight').fadeIn(300);
      $(this).on('click', function() {
        window.location = '/leadership';
      });
    }
    else if ( location.indexOf('more-dot') >= 0 ) {
      $('.section-title.nine').fadeIn(300);
      $(this).on('click', function() {
        window.location = '/more';
      });
    }
  }, function() {
    $('.section-title').hide();
    $('.section-title.current').show();
    $('.section-title').css('color', 'rgba(255,255,255,.85)');
  });
}

// Collect all functions to execute at once on Load
function initialize() {
  dotNav();
}

// Collect all functions to execute on Resize
function initializeResize() {
}


$(document).ready(initialize);
$(window).resize(initializeResize);
