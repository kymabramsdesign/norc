function columns() {
  var leftBottom = $('.left-50').position().top + $('.left-50').outerHeight(true);
  var leftOffset = $('.left-50').offset().top;
  var leftHeight = $('.left-50').height();
  var windowHeight = $(window).height();
  var scrollPosition = $(window).scrollTop();
  var subnavHeight = $('.sub-nav').height();
  var rightHeight = $('.right-50').height();
  var windowWidth = $(window).width();

  // Only do the following on Mobile screens
  if ( windowWidth <= 767 ) {

    // Adds carousel library for mobile touch
    var script = document.createElement( 'script' );
    script.src = 'js/owl.carousel.min.js';
    $("footer").append( script ); 

    // Initialize mobile carousel with settings
    $(document).ready(function(){
      $(".left-50").owlCarousel({
        items: 1,
        autoHeight:true,
        lazyload: true,
        dots: true
      });
    });

    if( window.innerHeight < window.innerWidth ) {
      $('.image-container').css('top', '57px');
      $('.mobile-bar').css('background-color', '#fff');
      $("body").removeClass('no-scroll');
    } else {
      $('.image-container').css('top', '34vh');
      $('.mobile-bar').css('background-color', 'transparent');
    }

    // On Click Function for the images
    $('.picture, .video').on('click', function() {
      var imageSrc = $(this).find('img').attr('src'); // Get image src
      var imageAlt = $(this).find('img').attr('alt'); // Get image alt
      var caption = $(this).find('img').attr('caption'); // Get image caption
      
      $(".page-overlay").fadeIn(300).css('z-index','205');
      $('.video-container').hide(); // hide video if click on image only
      $('.main-image').show().attr('src', imageSrc).attr('alt', imageAlt);

      //add image the first time
      if ( $('.image-container').hasClass('move-out') !== true ) {
        $('.image-container').addClass('move-in').prepend('<div class="mobile-bar"><div class="close-arrow"></div></div>');
      } else {
        $('.image-container').addClass('move-in');
      }

      // Add caption
      if ( $('.image-container').hasClass('move-out') !== true ) {
          $('.image-container').append('<p class="caption">'+ caption + '</p>');
      } else {
        $('.caption').text(caption);
      }

      if( window.innerHeight < window.innerWidth ) {
        $('.mobile-bar').css('background-color', '#fff');
        // do nothing
      } else {
        $("body").addClass('no-scroll'); // stop body from scrolling
      }

      // close the popup when user clicks Close Button
      $('.close-arrow').on('click', function() {
        var windowWidth = $(window).width();
        $('.page-overlay').fadeOut(600).css('z-index','105'); // remove overlay
        $('move-out').css('left', -windowWidth*2);
        $('.image-container').removeClass('move-in').addClass('move-out');
        $("body").removeClass('no-scroll'); // body to scroll again

        if ( $('iframe').is(':visible')) {
          $('#aging-video').attr('src', 'https://www.youtube.com/embed/WIAZ9lAVTVs?rel=0&showinfo=1&modestbranding=1');
        }
      });
    });
  }

  // Only do the following on screens larger than Mobile
  if ( windowWidth >= 768 ) {

    if ( (rightHeight + 20) < ( windowHeight - (subnavHeight+80)) ) {
      $('.right-50').css({
        'position': 'fixed',
        'top': subnavHeight+80
      });
      $('.left-50 div:last-of-type img').css('margin-bottom', '-5px');

    } else {
      $('.right-50').css({
        'position': 'absolute',
        'top': 'initial'
      });
      $('.left-50 div:last-of-type img').css('margin-bottom', '-5px');
    }

    if ( (windowHeight + scrollPosition) >= (leftBottom) ) {
      $('.left-50').css({
        // 'position': 'fixed',
        // 'bottom': 0
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
          'bottom': 0,
          'top': 'initial'
        });
      }

      if ( (windowHeight + scrollPosition) <= (leftHeight + leftOffset) ) {
        $('.left-50').css({
          'position': 'absolute',
          'bottom': 'initial'
        });
      }
    });

    // On Click Function for the images
    $('.picture, .video, .chart').on('click', function() {
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
      $('body').addClass('no-scroll'); // stop body from scrolling
      $('.special-share').css('height', thisImageHeight);

      // close the popup when user clicks Close Button
      $('.close-button').on('click', function() {
        var windowWidth = $(window).width();
        $('.page-overlay').fadeOut(400).css('z-index','105'); // remove overlay
        $('move-out').css('left', -windowWidth);
        $('.image-container').removeClass('move-in').addClass('move-out');
        $("body").removeClass('no-scroll'); // body to scroll again

        if ( $('iframe').is(':visible')) {

          $('#aging-video').attr('src', 'https://www.youtube.com/embed/WIAZ9lAVTVs?rel=0&showinfo=1&modestbranding=1');
        }
      });
    });
  }
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
  } else if ( windowWidth <= 1150 && windowWidth > 900 ) {
    $('.video-container iframe').css({
      'height': '450px',
      'width': '800px'
    });
  } else if ( windowWidth <= 900 && windowWidth > 767) {
    $('.video-container iframe').css({
      'height': '381px',
      'width': '678px'
    });
  } else if ( windowWidth <= 767 ) {
    $('.video-container iframe').css({
      'height': '100%',
      'width': '100vw',
      'min-height': '230px'
    });
  }
}


$('.chart.bubble').on('click', function() {
  setTimeout(function() {
      $('.chart img').attr("src", "img/sample-static-complete.png");
    }, 1000);
});

// On Click Function for the videos/charts
function videoPopup() {
  $('.video, .chart').on('click', function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var currentContainerMargin = parseFloat($('.image-container.move-in').css('padding-top')); //current container top padding
    var videoHeight = $('.video-container').height();
    var xplacement = ((windowHeight-videoHeight)/2)-currentContainerMargin;

    if ( windowWidth >= 768 ) {
      $('.main-image').hide(); // hide image if click on video
      $('.video-container').show();
      $('.close-button').css('margin-top', xplacement);
    }
    else {
      $('.main-image').hide(); // hide image if click on video
      $('.video-container').show();
    }
  });
}

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
      $('.special-share').css('height', thisImageHeight);
    }
  }
}

// Functions for the Dot Navigation on Story Pages
function dotNav() {
  var page = $('body').attr('class'); // get the page user is on
  page = page.replace('story-page story-page_', ''); //gets the page
  var currentColor = $('h1').css('color'); //gets main color on page

  $('.dot-nav svg').hover(function() {
    $('.section-title').hide().css('color', '#989a9d');

    var location = $(this).attr('class');
    location = location.replace('nav-dot ', '');

    if ( location.indexOf('active') >= 0 ) {
      $('.section-title.current').stop(true,true).show().css('color', currentColor);
      $(this).on('click', function() {
        window.location = '/#'+ page;
      });
    }
    else if ( location.indexOf('insight-dot') >= 0 ) {
      $('.section-title.one').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        window.location = '/#introduction';
      });
    }
    else if ( location.indexOf('president-dot') >= 0 ) {
      $('.section-title.two').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        window.location = '/#president';
      });
    }
    else if ( location.indexOf('economics-dot') >= 0 ) {
      $('.section-title.three').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        window.location = '/#economics';
      });
    }
    else if ( location.indexOf('education-dot') >= 0 ) {
      $('.section-title.four').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        window.location = '/#education';
      });
    }
    else  if ( location.indexOf('global-dot') >= 0 ) {
      $('.section-title.five').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        window.location = '/#global';
      });
    }
    else if ( location.indexOf('health-dot') >= 0 ) {
      $('.section-title.six').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        window.location = '/#health';
      });
    }
    else if ( location.indexOf('society-dot') >= 0 ) {
      $('.section-title.seven').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        window.location = '/#society';
      });
    }
    else if ( location.indexOf('more-dot') >= 0 ) {
      $('.section-title.nine').stop(true,true).fadeIn(300);
      $(this).on('click', function() {
        window.location = '/#gain-more';
      });
    }
  }, function() {
    $('.section-title').hide();
    $('.section-title.current').stop(true,true).show();
    $('.section-title').css('color', currentColor);
  });
}

// Functions for the sub-nav on mobile devices
function mobileMenu() {
  var windowWidth = $(window).width();
  if ( windowWidth <= 767 ) {
    $('.dot-nav .section-title.current').on('click', function(e) {
      e.preventDefault(); // stops click from taking you to the homepage section
    });

    $('.load-more, .dot-nav .section-title.current').on('click', function() {
      if ( $('.load-more').hasClass('open-menu') ) {
        $('.menu-items').slideUp(150);
        $('.menu-items, .load-more, .sub-nav').removeClass('open-menu');
      } else {
        $('.menu-items').slideDown(250, function() {
          $('.menu-items, .load-more, .sub-nav').addClass('open-menu');
        });
      }
    });
  }
}

// Functions for Special Share buttons on charts
function specialShare() {
  var checkUrl = window.location.hash.substr(1);
  var scrollPosition = $(window).scrollTop();
  var windowHeight = $(window).height(); // Get window height

  if ( checkUrl === 'chart' ) {

    var caption = $('.picture').find('img').attr('caption'); // Get image caption
    var imageSrc = $('.picture').find('img').attr('src'); // Get image src
    var imageAlt = $('.picture').find('img').attr('alt'); // Get image alt

    //add image
    $('.image-container').addClass('move-in').append('<img src="img/close.svg" alt="Close" class="close-button" />');
    // Add caption
    $('.image-container').append('<p class="caption">'+ caption + '</p>');

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
    $('body').addClass('no-scroll'); // stop body from scrolling
    $('.special-share').css('height', thisImageHeight);

    $(window).bind("load", function() {
    
      $(".page-overlay").show().css('z-index','205');
      $('.main-image').show().attr('src', imageSrc).attr('alt', imageAlt);

      closeResisze();

      // close the popup when user clicks Close Button
      $('.close-button').on('click', function() {
        var windowWidth = $(window).width();
        $('.page-overlay').fadeOut(800).css('z-index','105'); // remove overlay
        $('move-out').css('left', -windowWidth*2);
        $('.image-container').removeClass('move-in').addClass('move-out');
        $("body").removeClass('no-scroll'); // body to scroll again

        if ( $('iframe').is(':visible')) {
          $('#aging-video').attr('src', 'https://www.youtube.com/embed/WIAZ9lAVTVs?rel=0&showinfo=1&modestbranding=1');
        }
      });
    });
  }

  else if ( checkUrl === 'charttwo') {
    var caption = $('.picture.charttwo').find('img').attr('caption'); // Get image caption
    var imageSrc = $('.picture.charttwo').find('img').attr('src'); // Get image src
    var imageAlt = $('.picture.charttwo').find('img').attr('alt'); // Get image alt

    //add image
    $('.image-container').addClass('move-in').append('<img src="img/close.svg" alt="Close" class="close-button" />');
    // Add caption
    $('.image-container').append('<p class="caption">'+ caption + '</p>');

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
    $('body').addClass('no-scroll'); // stop body from scrolling
    $('.special-share').css('height', thisImageHeight);

    $(window).bind("load", function() {
    
      $(".page-overlay").show().css('z-index','205');
      $('.main-image').show().attr('src', imageSrc).attr('alt', imageAlt);

      closeResisze();

      // close the popup when user clicks Close Button
      $('.close-button').on('click', function() {
        var windowWidth = $(window).width();
        $('.page-overlay').fadeOut(800).css('z-index','105'); // remove overlay
        $('move-out').css('left', -windowWidth*2);
        $('.image-container').removeClass('move-in').addClass('move-out');
        $("body").removeClass('no-scroll'); // body to scroll again
      });
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
  columns();
  subNav();
  popUpTop();
  videoPopup();
  dotNav();
  mobileMenu();
  specialShare();
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

