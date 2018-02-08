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
    $('.president .area').on('scroll', function() {
      var areaPosition = $(this).scrollTop();
      console.log(columnHeight);
      console.log(areaPosition);

      var thumb = $('.active .area .landing-text').offset().top;

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
