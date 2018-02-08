// Script for President's page
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
    var thisHeight = $('.president .thumbnails').height();
    $('.president .area').on('scroll', function() {
      var areaPosition = $(this).scrollTop();
      var thumb = $('.active .area .landing-text').offset().top;
      thumb = thumb+80;

      var isIE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
      var isIE10 = 'behavior' in document.documentElement.style && '-ms-user-select' in document.documentElement.style;

      if ( isIE11 == false || isIE10 == false ) {

        if ( (windowHeight-columnHeight) >= thumb ) {
          $('.president .thumbnails').css('position', 'fixed');
          $('.president .landing-text').css('margin-left', '50vw');
        }
        else {
          $('.president .thumbnails').css('position', 'initial');
          $('.president .landing-text').css('margin-left', 'initial');
        }
      }

      // IE hack to revert when scrolled back up
      if ( isIE11 == true || isIE10 == true ) {
        if ( (windowHeight-columnHeight) >= thumb ) {
        $('.president .thumbnails').css('position', 'absolute');
        $('.president .landing-text').css('margin-left', '50vw');
        }
        else {
          $('.president .thumbnails').css('position', 'initial');
          $('.president .landing-text').css('margin-left', 'initial');
        }
      }
    });
  }
}

// Landing Page popups
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

  $('.popup-image').on('click', function(gas) {
    gas.preventDefault();
    $('.white-page-overlay').fadeIn();
  });
}

// Collect all functions to execute at once on Load
function initialize() {
  presidentEssay();
  landingVideo();
}


// Collect all functions to execute on Resize
function initializeResize() {
  presidentEssay();
  landingVideo();
}

$(document).ready(initialize);
$(window).resize(initializeResize);
