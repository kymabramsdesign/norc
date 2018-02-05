$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['home'],
    scrollOverflow: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    navigationTooltips: ['one', 'two'],
    showActiveTooltip: true,
    menu: true,
    autoScrolling: false,
    loopHorizontal: false
  });
});

//Check Browser and adjust font-weights for Chrome
function checkBrowser() {
  var isChromium = !!window.chrome;
  if ( isChromium === true ) {
    $('.main p, .area .h2 p, .main .section-title').css('font-weight', '300');
  }
}

// On Scroll functions
function scrollTime() {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  if ( windowWidth >= 768 ) {

    $('.fp-slides, .economics .area, .active .fp-tableCell, .global .area, .health .area, .society .area').on('scroll', function() {
      var text = $('.active .area .landing-text p').offset().top;
      var thumb = $('.active .area .thumbnails').offset().top;
      var thumbsHeight = $('.active .area .thumbnails').innerHeight();
      alert(windowHeight);

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
