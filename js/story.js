function columns() {
  var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var leftOffset = $('.left-50').offset().top;
  var leftHeight = $('.left-50').height();
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();
  var subnavHeight = $('.sub-nav').height();
  var rightHeight = $('.right-50').height();

  if ( (rightHeight + 20) < ( windowHeight - (subnavHeight+80)) ) {
    $('.right-50').css({
      'position': 'fixed',
      'top': subnavHeight+80
    });
  } else {
    $('.right-50').css({
      'position': 'absolute',
      'top': 'initial'
    });
  }

  if ( leftHeight <= ( windowHeight - (subnavHeight+80)) ) {
    $('.left-50').css({
      'position': 'fixed',
      'top': subnavHeight+80
    });
  } else if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
    $('.left-50').css({
      'position': 'fixed',
      'bottom': 0
    });
  }

  $(window).on( 'scroll', function() {
    var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
    var windowHeight = $(window).height();
    var scrollPosition = $(window).scrollTop();
    var subnavHeight = $('.sub-nav').height();
    var rightHeight = $('.right-50').height();
    var leftHeight = $('.left-50').height();

    if ( rightHeight <= leftHeight ) {
      $('.left-50 .picture img').css('margin-bottom', '-4px');
    } else if ( leftHeight <= ( windowHeight - (subnavHeight+80)) ) {
      $('.left-50').css({
        'position': 'fixed',
        'top': subnavHeight+80
      });
    } else if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
      $('.left-50').css({
        'position': 'fixed',
        'bottom': 0
      });
    }

    if ( (windowHeight + scrollPosition) <= (leftHeight + leftOffset) ) {
      $('.left-50').css({
        'position': 'absolute',
        'bottom': 'initial'
      });
    }
  });
}

// Adjusts the height of the Subnav
function subNav() {
  var navHeight = $('.sub-nav').height();

  if ( navHeight >= 35 && navHeight < 60 ) {
    $('.story-content').css('margin-top', '117px');
  }
  else if ( navHeight >= 60 ) {
    $('.story-content').css('margin-top', '145px');
  }
  else {
    $('.story-content').css('margin-top', '114px');
  }
}

function extraResize() {
  var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var leftOffset = $('.left-50').offset().top;
  var leftHeight = $('.left-50').height();
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();
  var subnavHeight = $('.sub-nav').height();

  if ( leftHeight <= ( windowHeight - (subnavHeight+80)) ) {
    $('.left-50').css({
      'position': 'fixed',
      'top': subnavHeight+80
    });
  } else if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
    $('.left-50').css({
      'position': 'fixed',
      'bottom': 0,
      'top': 'inital'
    });
  }
}

// Controls the image/video pop-up preview

// Puts image the exact width of the screen to the left for sliding on
function popUpTop () {
  var windowWidth = $(window).width();
  $('.image-container').css('left', -windowWidth);

  // Video iframe resizing
  if ( windowWidth > 1151 ) {
    $('.video-container iframe').css({
      'height': '563px',
      'width': '1000px'
    });
  } else if ( windowWidth <= 1150 && windowWidth > 901 ) {
    $('.video-container iframe').css({
      'height': '464px',
      'width': '825px'
    });
  } else if ( windowWidth <= 900 ) {
    $('.video-container iframe').css({
      'height': '381px',
      'width': '678px'
    });
  }
}

// On Click Function for the videos/charts
function videoPopup () {
  $('.video').on('click', function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var currentContainerMargin = parseFloat($('.image-container.move-in').css('padding-top')); //current container top padding
    var videoHeight = $('.video-container iframe').height();
    var xplacement = ((windowHeight-videoHeight)/2)-currentContainerMargin;

    $('.main-image').hide(); // hide image if click on video
    $('.video-container').show();
    $('.close-button').css('margin-top', xplacement);

  });
}

// On Click Function for the images
$('.picture, .video').on('click', function() {
  var scrollPosition = $(window).scrollTop();
  var imageSrc = $(this).find('img').attr('src'); // Get image src
  var imageAlt = $(this).find('img').attr('alt'); // Get image alt
  var caption = $(this).find('img').attr('caption'); // Get image caption
  var windowHeight = $(window).height(); // Get window height
  
  $(".page-overlay").fadeIn(300).css('z-index','205');
  $('.video-container').hide(); // hide video if click on image only
  $('.main-image').show().attr('src', imageSrc).attr('alt', imageAlt);

  //add image the first time
  if ( $('.image-container').hasClass('move-out') !== true ) {
    $('.image-container').addClass('move-in').append('<img src="img/close.svg" alt="Close" class="close-button" />');
  } else {
    $('.image-container').addClass('move-in');
  }

  // Add caption
  if ( $('.image-container').hasClass('move-out') !== true ) {
      $('.image-container').append('<p class="caption">'+ caption + '</p>');
  } else {
    $('.caption').text(caption);
  }

  var thisImageHeight = $('.main-image').innerHeight(); // Get the height of the displayed image
  var thisImageWidth = $('.main-image').innerWidth(); // Get the width of the displayed image
  var currentMargin = $('.image-container.move-in').css('padding-top'); //current container top padding
  currentMargin = parseFloat(currentMargin)*2; // total container top and bottom padding
  var closeMargin = ((windowHeight-thisImageHeight-currentMargin)/2) + 'px'; //gets margin for top of close
  var captionMargin = (windowHeight - thisImageHeight); // get total top and bottom space
  captionMargin = (captionMargin/2) + thisImageHeight + 7; // add image height to half total top/bottom space
  var paddingLeft = parseFloat($('.move-in').css('padding-left')); //get image left padding
  var paddingRight = parseFloat($('.move-in').css('padding-right')); //get image right padding
  var captionPadding = (paddingLeft - paddingRight)/2;

  $('.move-in').css('top', scrollPosition);
  $('.close-button').css('margin-top', closeMargin);
  $('.caption').css({
    'top': captionMargin,
    'width': thisImageWidth,
    'margin-left': -captionPadding+'px'
  });
  $("body").addClass('no-scroll'); // stop body from scrolling

  // close the popup when user clicks Close Button
  $('.close-button').on('click', function() {
    var windowWidth = $(window).width();
    $('.page-overlay').fadeOut(400).css('z-index','105'); // remove overlay
    $('move-out').css('left', -windowWidth);
    $('.image-container').removeClass('move-in').addClass('move-out');
    $("body").removeClass('no-scroll'); // body to scroll again
  });
});


// Keeps the close X lined up with the image on resize
function closeResisze() {
  if ( $('.image-container').hasClass('move-in') ) {
    var windowHeight = $(window).height();
    var thisImageHeight = $('.main-image').innerHeight(); // Get the height of the displayed image
    var thisImageWidth = $('.main-image').innerWidth(); // Get the width of the displayed image
    var currentMargin = $('.image-container.move-in').css('padding-top'); //current container top padding
    currentMargin = parseFloat(currentMargin)*2; // total container top and bottom padding
    var closeMargin = ((windowHeight-thisImageHeight-currentMargin)/2) + 'px'; //gets margin for top of close
    var captionMargin = (windowHeight - thisImageHeight); // get total top and bottom space
    captionMargin = (captionMargin/2) + thisImageHeight + 7; // add image height to half total top/bottom space
    var paddingLeft = parseFloat($('.move-in').css('padding-left')); //get image left padding
    var paddingRight = parseFloat($('.move-in').css('padding-right')); //get image right padding
    var captionPadding = (paddingLeft - paddingRight)/2;

    if ( $('.video-container').is(':visible') === true ) {
      var windowWidth = $(window).width();
      var currentContainerMargin = parseFloat($('.image-container.move-in').css('padding-top')); //current container top padding
      var videoHeight = $('.video-container iframe').height();
      var xplacement = ((windowHeight-videoHeight)/2)-currentContainerMargin;

      $('.close-button').css('margin-top', xplacement);
    } else {

      $('.close-button').css('margin-top', closeMargin);
      $('.caption').css({
        'top': captionMargin,
        'width': thisImageWidth,
        'margin-left': -captionPadding+'px'
      });
    }
  }
}


// Collect all functions to execute at once on Load
function initialize() {
  columns();
  subNav();
  popUpTop();
  videoPopup();
}

// Collect all functions to execute on Resize
function initializeResize() {
  columns();
  subNav();
  extraResize();
  popUpTop();
  closeResisze();
}


$(document).ready(initialize);
$(window).resize(initializeResize);

