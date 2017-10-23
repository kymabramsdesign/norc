// Adjusts where the menu falls to the right of the content
function menuMove () {
  var windowWidth = $(window).width();
  $('.menu-container').css('right',-windowWidth);
}

$(document).ready(menuMove);
$(window).resize(menuMove);

// Menu Button Functions
$('.menu-button').on('click', function() {

  if ( $('.menu-button').hasClass('menu-open') ) {
    $('.white-page-overlay').fadeOut(300);
    $('.share-button').css('z-index',200);
    $(this).removeClass('menu-open').attr('src', 'img/menu-button.svg');
    $('.menu-container').removeClass('moved');
    $("body").removeClass('no-scroll'); // body to scroll again
  }
  else {
    $('.white-page-overlay').fadeIn(300);
    $('.share-button').css('z-index',100);
    $(this).css('z-index',300).addClass('menu-open').attr('src', 'img/menu-button-orange.svg');
    $('.menu-container').addClass('moved');
    $("body").addClass('no-scroll'); // body to stop scroll
  }
});

$('.white-page-overlay').on('click', function() {
  $(this).fadeOut(300);
  $('.share-button').css('z-index',200);
  $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button.svg');
  $('.menu-container').removeClass('moved');
  $("body").removeClass('no-scroll'); // body to scroll again
});

// Wait until page is fully loaded to initialize the menu
$(window).bind("load", function() {
  // Full Menu
  $('.menu-container').html(
    '<ul>'+
    '<li><a href="#">Insight 2017</a></li>' +
    '<li><a href="#">President’s Essay</a></li>' +
    '<li class="divider"><hr /></li>' +
    '<li class="arrow"><a href="#">Economics, Markets, and the Workforce</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="#">Story 1</a></li>' +
      '<li><a href="#">Story 2</a></li>' +
      '<li><a href="#">Story 3</a></li>' +
      '<li><a href="#">Story 4</a></li>' +
      '<li><a href="#">Story 5</a></li>' +
      '<li><a href="#">Story 6</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Education, Training, and Learning</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="#">Story 1</a></li>' +
      '<li><a href="#">Story 2</a></li>' +
      '<li><a href="#">Story 3</a></li>' +
      '<li><a href="#">Story 4</a></li>' +
      '<li><a href="#">Story 5</a></li>' +
      '<li><a href="#">Story 6</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Global Development</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="/usaid-evaluations.html">Measuring impact and improving performance</a></li>' +
      '<li><a href="/complex-projects.html">Assessing the impact of complex projects</a></li>' +
      '<li><a href="/real-time-adaptability.html">Adapting timelines and methodologies to conditions on the ground</a></li>' +
      '<li><a href="/vulnerable-populations.html">Reaching vulnerable populations in fragile environments</a></li>' +
      '<li><a href="/closed-societies.html">Peering into closed societies</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Health and Wellbeing</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="#">Making medicare and medicaid more effective</a></li>' +
      '<li><a href="#">Using data to improve safety and quality</a></li>' +
      '<li><a href="#">Working with providers, payers and other stakeholders</a></li>' +
      '<li><a href="#">Visualizing disease vulnerability</a></li>' +
      '<li><a href="#">Cultivating a culture of health</a></li>' +
      '<li><a href="#">Testing americans’ zika awareness</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Society, Media, and Public Affairs</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="#">Story 1</a></li>' +
      '<li><a href="#">Story 2</a></li>' +
      '<li><a href="#">Story 3</a></li>' +
      '<li><a href="#">Story 4</a></li>' +
      '<li><a href="#">Story 5</a></li>' +
      '<li><a href="#">Story 6</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Science and Innovation</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="#">Story 1</a></li>' +
      '<li><a href="#">Story 2</a></li>' +
      '<li><a href="#">Story 3</a></li>' +
      '<li><a href="#">Story 4</a></li>' +
      '<li><a href="#">Story 5</a></li>' +
      '<li><a href="#">Story 6</a></li>' +
    '</ul></li>' +
    '<li class="divider"><hr /></li>' +
    '<li class="arrow"><a href="#">Leadership and Trustees</a></li>' +
    '<li><a href="#">GAIN MORE INSIGHT</a></li>' +
    '</ul>'
  );

  // Internal Menu Functions
  $('.arrow-img').on('click', function() {
    $('.dropdown-menu').slideUp(200);
    $('.arrow a').removeClass('active');
    $('.arrow-img').attr('src', 'img/arrow.svg');

    if ( $(this).hasClass('open') ) {
      $(this).removeClass('open');
    }
    else {
      $('.arrow-img').removeClass('open');
      $(this).prev().addClass('active');
      $(this).next('ul').slideDown(200);
      $(this).addClass('open').attr('src', 'img/arrow-orange.svg');
    }
  });

});
