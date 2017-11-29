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
    $('.menu-container').removeClass('moved');
    $("body").removeClass('no-scroll'); // body to scroll again

    var whatPage = $('body').attr('class');
    if ( whatPage.indexOf('main') >= 0 ) {
      $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button-white.svg');
    }
    else {
      $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button.svg');
    }
  }
  else {
    $('.white-page-overlay').fadeIn(300);
    $('.share-button').css('z-index',100);
    $(this).css('z-index',300).addClass('menu-open').attr('src', 'img/menu-button-orange.svg');
    $('.menu-container').addClass('moved');
    $("body").addClass('no-scroll'); // body to stop scroll
    $('.arrow a').removeClass('active');
    $('.arrow-img').attr('src', 'img/arrow.svg').removeClass('open');
    $('.dropdown-menu').slideUp(200);
  }
});

$('.white-page-overlay').on('click', function() {
  $(this).fadeOut(300);
  $('.share-button').css('z-index',200);
  $('.menu-container').removeClass('moved');
  $("body").removeClass('no-scroll'); // body to scroll again
  $('.arrow a').removeClass('active');
  $('.arrow-img').attr('src', 'img/arrow.svg').removeClass('open');
  $('.dropdown-menu').slideUp(200);

  var whatPage = $('body').attr('class');
    if ( whatPage.indexOf('main') >= 0 ) {
      $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button-white.svg');
    }
    else {
      $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button.svg');
    }
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
      '<li><a href="/congregations">Tracking the professional and economic health of churches</a></li>' +
      '<li><a href="/gas-prices">Tracking gasoline and diesel prices</a></li>' +
      '<li><a href="/poverty-research">Exploring poverty and resilience</a></li>' +
      '<li><a href="/consumer-finances">Monitoring the financial health of American families</a></li>' +
      '<li><a href="/youth-data">Serving diverse purposes with rich data</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Education, Training, and Learning</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="/higher-education">Making higher education more accessible and achievable</a></li>' +
      '<li><a href="/early-childhood">Assessing and shaping the impact of early childhood education</a></li>' +
      '<li><a href="/science-and-technology">Tracking the careers of STEM doctorates</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Global Development</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="/usaid-evaluations">Measuring impact and improving performance</a></li>' +
      '<li><a href="/complex-projects">Assessing the impact of complex projects</a></li>' +
      '<li><a href="/real-time-adaptability">Adapting timelines and methodologies to conditions on the ground</a></li>' +
      '<li><a href="/vulnerable-populations">Reaching vulnerable populations in fragile environments</a></li>' +
      '<li><a href="/closed-societies">Peering into closed societies</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Health and Well-Being</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="/medicare-medicaid">Making medicare and medicaid more effective</a></li>' +
      '<li><a href="/patient-risk">Using data to improve safety and quality</a></li>' +
      '<li><a href="/diverse-clients">Working with providers, payers and other stakeholders</a></li>' +
      '<li><a href="/opioid-epidemic">Visualizing disease vulnerability</a></li>' +
      '<li><a href="/health-culture">Cultivating a culture of health</a></li>' +
      '<li><a href="/zika-awareness">Testing Americans’ Zika awareness</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Society, Media, and Public Affairs</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu last-one">' +
      '<li><a href="/successful-aging">Exploring the intersection between social life and successful aging</a></li>' +
      '<li><a href="/intimate-partner-violence">Combating intimate partner violence</a></li>' +
      '<li><a href="/minds-and-media">Tracking American’s concerns and the media that inform them</a></li>' +
      '<li><a href="/teen-surveys">Tapping into the minds and behaviors of teens</a></li>' +
      '<li><a href="/disaster-fatalities">Understanding how disasters kill</a></li>' +
      '<li><a href="/smoking-and-social-media">Mapping smoking policies and behavior</a></li>' +
    '</ul></li>' +
    '<li class="divider"><hr /></li>' +
    '<li><a href="#">Gain More Insight</a></li>' +
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
