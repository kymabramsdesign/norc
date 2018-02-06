$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home'],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    navigationTooltips: ['one', 'two'],
    showActiveTooltip: true,
    menu: true,
    autoScrolling: false,
    loopHorizontal: false,
    scrollOverflow: true
  });
});


// On Scroll functions
function scrollTime() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  if ( windowWidth >= 768 ) {

    $('.president .area, .economics .area, .education .area, .global .area, .health .area, .society .area, .gain-more .area').on('scroll', function() {

      var areaPosition = $(this).scrollTop();
      var areaHeight = $(this).height();
      console.log(areaHeight);
      console.log(areaPosition);


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
}

// Collect all functions to execute on Resize
function initializeResize() {
  scrollTime();
}

$(document).ready(initialize);
$(window).resize(initializeResize);
