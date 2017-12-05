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
    '<li><a href="#">Introduction</a></li>' +
    '<li><a href="#">President’s Essay</a></li>' +
    '<li class="divider"><hr /></li>' +
    '<li class="arrow"><a href="#">Economics, Markets, and the Workforce</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="/congregations">Tracking the Professional and Economic Health of Churches</a></li>' +
      '<li><a href="/gas-prices">Tracking Gasoline and Diesel Prices</a></li>' +
      '<li><a href="/poverty-research">Exploring Poverty and Resilience</a></li>' +
      '<li><a href="/consumer-finances">Monitoring the Financial Health of American Families</a></li>' +
      '<li><a href="/youth-data">Serving Diverse Purposes with Rich Data</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Education, Training, and Learning</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="/higher-education">Making Higher Education More Accessible and Achievable</a></li>' +
      '<li><a href="/early-childhood">Assessing and Shaping the Impact of Early Childhood Education</a></li>' +
      '<li><a href="/science-and-technology">Tracking the Careers of STEM Doctorates</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Global Development</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="/usaid-evaluations">Measuring Impact and Improving Performance</a></li>' +
      '<li><a href="/complex-projects">Assessing the Impact of Complex Projects</a></li>' +
      '<li><a href="/real-time-adaptability">Adapting Timelines and Methodologies to Conditions on the Ground</a></li>' +
      '<li><a href="/vulnerable-populations">Reaching Vulnerable Populations in Fragile Environments</a></li>' +
      '<li><a href="/closed-societies">Peering Into Closed Societies</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Health and Well-Being</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu">' +
      '<li><a href="/medicare-medicaid">Making Medicare and Medicaid More Effective</a></li>' +
      '<li><a href="/patient-risk">Using Data to Improve Safety and Quality</a></li>' +
      '<li><a href="/diverse-clients">Working with Providers, Payers and Other Stakeholders</a></li>' +
      '<li><a href="/opioid-epidemic">Visualizing Disease Vulnerability</a></li>' +
      '<li><a href="/health-culture">Cultivating a culture of health</a></li>' +
      '<li><a href="/zika-awareness">Testing Americans’ Zika Awareness</a></li>' +
    '</ul></li>' +
    '<li class="arrow"><a href="#">Society, Media, and Public Affairs</a><img src="img/arrow.svg" alt="Arrow" class="arrow-img" />' +
    '<ul class="dropdown-menu last-one">' +
      '<li><a href="/successful-aging">Informing Policy on Retirement and Aging</a></li>' +
      '<li><a href="/intimate-partner-violence">Combating Intimate Partner Violence</a></li>' +
      '<li><a href="/minds-and-media">Tracking American’s Concerns and the Media That Inform Them</a></li>' +
      '<li><a href="/teen-surveys">Tapping into the Minds and Behaviors of Teens</a></li>' +
      '<li><a href="/disaster-fatalities">Understanding How Disasters Kill</a></li>' +
      '<li><a href="/smoking-and-social-media">Mapping Smoking Policies to Behavior</a></li>' +
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
