// Script for President's page
function presidentEssay() {
  $('.president a').click( function(essay) {
    essay.preventDefault();
  });

  // wait to measure height until the president's image has fully loaded
  $('#img-to-measure').bind("load", function() {

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
  });
}

// Collect all functions to execute at once on Load
function initialize() {
  presidentEssay();
}


// Collect all functions to execute on Resize
function initializeResize() {
  presidentEssay();
}

$(document).ready(initialize);
$(window).resize(initializeResize);
