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
    $('.share-button').css('z-index',99);
    $('.menu-button').css('z-index',200);
    $('.menu-container').removeClass('moved');
    $("body").removeClass('no-scroll'); // body to scroll again

    var whatPage = $('body').attr('class');
    // Home Page
    if ( whatPage.indexOf('main') >= 0 ) {
      $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button-white.svg');
    }
    // Story Pages
    else {
      $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button.svg');
    }
  }
  else {
    $('.white-page-overlay').fadeIn(300);
    $('.share-button').css('z-index',99);
    $(this).css('z-index',300).addClass('menu-open').attr('src', 'img/menu-button-orange.svg');
    $('.menu-container').addClass('moved');
    $("body").addClass('no-scroll'); // body to stop scroll
    $('.arrow a').removeClass('active');
    $('.arrow-img').attr('src', 'img/arrow.svg').removeClass('open');
    $('.dropdown-menu').slideUp(200);
  }
});

var windowWidth = $(window).width();

if ( windowWidth >= 768 ) {
  $('.white-page-overlay').on('click', function() {
    $(this).fadeOut(300);
    $('.share-button').css('z-index',99);
    $('.menu-button').css('z-index',200);
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
}

// Wait until page is fully loaded to initialize the menu
$(window).bind("load", function() {
  // Full Menu
  $('.menu-container').html(
    '<ul>'+
    '<li class="menu-title">2017 Annual Report</li>' +
    '<li><a href="/index.html#home" class="trigger-slider check-url">Introduction</a></li>' +
    '<li><a href="/index.html#home/1" class="trigger-slider check-url">President\'s Letter</a></li>' +
    '<li class="divider"><hr /></li>' +
    '<li class="arrow economics-arrow"><a href="javascript:void(0)" data-area="#econ">Economics, Markets, and the Workforce</a><svg class="arrow-img"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
    '<ul class="dropdown-menu economics-dropdown">' +
      '<li><a href="/index.html#home/2" class="trigger-slider">Overview</a><li><a href="/congregations">Tracking the Professional and Economic Outlook of Congregations</a></li>' +
      '<li><a href="/poverty-research">Exploring Poverty and Resilience</a></li>' +
      '<li><a href="/consumer-finances">Monitoring the Financial Health of American Families</a></li>' +
      '<li><a href="/just-companies">Identifying America\’s Most Just Companies</a></li>' +
      '<li><a href="/youth-data">Serving Diverse Purposes with Rich Data</a></li>' +
      '<li><a href="/gss-trends">Willingness to Work</a></li>' +
    '</ul></li>' +
    '<li class="arrow education-arrow"><a href="javascript:void(0)" data-area="#ed">Education, Training, and Learning</a><svg class="arrow-img"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
    '<ul class="dropdown-menu education-dropdown">' +
      '<li><a href="/index.html#home/3" class="trigger-slider"">Overview</a></li><li><a href="/higher-education">Making Higher Education More Accessible and Achievable</a></li>' +
      '<li><a href="/early-childhood">Assessing and Shaping the Impact of Early Childhood Education</a></li>' +
      '<li><a href="/science-and-technology">Tracking the Careers of STEM Doctorates</a></li>' +
    '</ul></li>' +
    '<li class="arrow global-arrow"><a href="javascript:void(0)" data-area="#global">Global Development</a><svg class="arrow-img"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
    '<ul class="dropdown-menu global-dropdown">' +
      '<li><a href="/index.html#home/4" class="trigger-slider"">Overview</a></li><li><a href="/usaid-evaluations">Measuring Impact and Improving Performance</a></li>' +
      '<li><a href="/complex-projects">Assessing the Impact of Complex Projects</a></li>' +
      '<li><a href="/real-time-adaptability">Adapting Timelines and Methodologies to Conditions on the Ground</a></li>' +
      '<li><a href="/vulnerable-populations">Reaching Vulnerable Populations in Fragile Environments</a></li>' +
      '<li><a href="/closed-societies">Peering into Closed Societies</a></li>' +
      '<li><a href="/global-portfolio">NORC\’s Global Portfolio</a></li>' +
    '</ul></li>' +
    '<li class="arrow health-arrow"><a href="javascript:void(0)" data-area="#health">Health and Well-Being</a><svg class="arrow-img"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
    '<ul class="dropdown-menu health-dropdown">' +
      '<li><a href="/index.html#home/5" class="trigger-slider"">Overview</a></li><li><a href="/medicare-medicaid">Making Medicare and Medicaid More Effective</a></li>' +
      '<li><a href="/patient-risk">Using Data to Improve Safety and Quality</a></li>' +
      '<li><a href="/diverse-stakeholders">Working with Providers, Payers, and Other Stakeholders</a></li>' +
      '<li><a href="/opioid-epidemic">Visualizing Disease Vulnerability</a></li>' +
      '<li><a href="/health-culture">Cultivating a Culture of Health</a></li>' +
      '<li><a href="/zika-awareness">Assessing Americans\’ Zika Awareness</a></li>' +
    '</ul></li>' +
    '<li class="arrow society-arrow"><a href="javascript:void(0)" data-area="#soc" >Society, Media, and Public Affairs</a><svg class="arrow-img"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
    '<ul class="dropdown-menu society-dropdown">' +
      '<li><a href="/index.html#home/6" class="trigger-slider"">Overview</a></li><li><a href="/aging">Informing Policy on Retirement and Aging</a></li>' +
      '<li><a href="/intimate-partner-violence">Combating Intimate Partner Violence</a></li>' +
      '<li><a href="/minds-and-media">Tracking Americans\’ Opinions and the Media That Inform Them</a></li>' +
      '<li><a href="/teen-surveys">Tapping into the Minds and Behaviors of Teens</a></li>' +
      '<li><a href="/disaster-fatalities">Understanding How Disasters Kill</a></li>' +
      '<li><a href="/smoking-and-social-media">Mapping Smoking Policies to Behavior</a></li>' +
    '</ul></li>' +
    '<li class="divider"><hr /></li>' +
    '<li><a href="/index.html#home/7" class="trigger-slider check-url">Gain More Insight</a></li>' +
    '</ul>'
  );

  // Internal Menu Functions
  $('.arrow-img').on('click', function() {
    $('.dropdown-menu').slideUp(200);
    $('.arrow a').removeClass('active');
    // $('.arrow-img').attr('src', 'img/arrow.svg');
    // text color changes...leaving arrow grey

    if ( $(this).hasClass('open') ) {
      $(this).removeClass('open');
    }
    else {
      $('.arrow-img').removeClass('open');
      $(this).prev().addClass('active');
      $(this).next('ul').slideDown(200);
      $(this).addClass('open');
      // $(this).addClass('open').attr('src', 'img/arrow-orange.svg');
    }
  });

  var windowWidth = $(window).width();

  if ( windowWidth >= 768 ) {
    $('.trigger-slider').on('click', function() {
      $('#intro-overlay').fadeOut(1000); // Hides Intro Animation Overlay if visible
      $('.typed-first, .typed-second, .ti-cursor').html("");  // Stops Intro Animation if playing
      $('.white-page-overlay').fadeOut(300);
      $('.share-button').css('z-index',99);
      $('.menu-button').css('z-index',200);
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
  }


});

$(window).on("load",function(){
  
  $(".menu-container li ul li:first-child a, a.check-url").bind("click",function(e){
    testurl=window.location.href; 
    if(testurl.indexOf("index.html") > -1){
        $('.white-page-overlay').fadeOut(300);
        $('.share-button').css('z-index',99);
        $('.menu-button').css('z-index',200);
        $('.menu-container').removeClass('moved');
        $("body").removeClass('no-scroll');
        $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button-white.svg');
      }
  });
  
  $(".menu-container li.arrow > a").bind("click",function(e){
    e.preventDefault();
    $(this).next().click();
    setsvgs=$(this).next().children().attr("xlink:href");
    if(setsvgs.indexOf("off")>-1){
      $("svg.arrow-img use").attr("xlink:href","img/arrow2.svg#off");
      $(this).next().children().attr("xlink:href","img/arrow2.svg"+$(this).attr("data-area"));
    }else{
       $("svg.arrow-img use").attr("xlink:href","img/arrow2.svg#off");
    }
    if($(window).width() <= 767){}
  });
  
  $("#gfootnote1,#dgfootnote1").attr("title",$("#footnote1 span").html()).attr("style","cursor:pointer;").bind("click",function(){
    
    location.href="index.html?footnotes#home/7"
    
  });
  setUrls=location.href;
  if(setUrls.indexOf("footnotes") > -1){
   
    setGainHeight=$(".gain-more").height();
    setoffSet=$("#footnote1").offset()
    var elmnt = document.getElementById("footnote1");
    elmnt.scrollIntoView();
    history.pushState('', document.title, window.location.pathname);
    location.hash="#home/7"
  }
  
});
