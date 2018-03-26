// Adjusts where the menu falls to the right of the content
function menuMove() {
    var windowWidth = $(window).width() + 100;
    $('.menu-container').css('right', -windowWidth);
}

$(document).ready(menuMove);
$(window).resize(menuMove);

// Menu Button Functions
$('.menu-button').on('click', function() {

    if ($('.menu-button').hasClass('menu-open')) {
        $('.white-page-overlay').fadeOut(300);
        $('.share-button').css('z-index', 99);
        $('.menu-button').css('z-index', 200);
        $('.menu-container').removeClass('moved');
        $("body").removeClass('no-scroll'); // body to scroll again

        var whatPage = $('body').attr('class');
        // Home Page
        if (whatPage.indexOf('main') >= 0) {
            $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button-white.svg');
        }
        // Story Pages
        else {
            $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button.svg');
        }
    } else {
        $('.white-page-overlay').fadeIn(300);
        $('.share-button').css('z-index', 99);
        $(this).css('z-index', 300).addClass('menu-open').attr('src', 'img/menu-button-orange.svg');
        $('.menu-container').addClass('moved');
        $("body").addClass('no-scroll'); // body to stop scroll
        $('.arrow a').removeClass('active');
        $('.arrow-img').attr('src', 'img/arrow.svg').removeClass('open');
        $('.dropdown-menu').slideUp(200);
    }
});

var windowWidth = $(window).width();

if (windowWidth >= 768) {
    $('.white-page-overlay').on('click', function() {
        $(this).fadeOut(300);
        $('.share-button').css('z-index', 99);
        $('.menu-button').css('z-index', 200);
        $('.menu-container').removeClass('moved');
        $("body").removeClass('no-scroll'); // body to scroll again
        $('.arrow a').removeClass('active');
        $('.arrow-img').attr('src', 'img/arrow.svg').removeClass('open');
        $('.dropdown-menu').slideUp(200);

        var whatPage = $('body').attr('class');
        if (whatPage.indexOf('main') >= 0) {
            $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button-white.svg');
        } else {
            $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button.svg');
        }
    });
}

// Wait until page is fully loaded to initialize the menu
$(window).bind("load", function() {
    // Full Menu
    $('.menu-container').html(
        '<ul>' +
        '<li class="menu-title">2017 Annual Report</li>' +
        '<li><a href="/index.html#home" class="trigger-slider check-url">Introduction</a></li>' +
        '<li><a href="/index.html#home/1" class="trigger-slider check-url">President\'s Letter</a></li>' +
        '<li class="divider"><hr /></li>' +
        '<li class="arrow economics-arrow"><a href="javascript:void(0)" data-area="#econ">Economics, Markets, and the Workforce</a><svg class="arrow-img" data-activeColor="#6fa387"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
        '<ul class="dropdown-menu economics-dropdown">' +
        '<li><a href="/index.html#home/2" class="trigger-slider">Overview</a><li><a href="/congregations.html">Tracking the Professional and Economic Outlook of Congregations</a></li>' +
        '<li><a href="/poverty-research.html">Exploring Poverty and Resilience</a></li>' +
        '<li><a href="/consumer-finances.html">Monitoring the Financial Health of American Families</a></li>' +
        '<li><a href="/just-companies.html">Identifying America\’s Most Just Companies</a></li>' +
        '<li><a href="/youth-data.html">Serving Diverse Purposes with Rich Data</a></li>' +
        '<li><a href="/gss-trends.html">Willingness to Work</a></li>' +
        '</ul></li>' +
        '<li class="arrow education-arrow"><a href="javascript:void(0)" data-area="#ed">Education, Training, and Learning</a><svg class="arrow-img" data-activeColor="#9e525d"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
        '<ul class="dropdown-menu education-dropdown">' +
        '<li><a href="/index.html#home/3" class="trigger-slider"">Overview</a></li><li><a href="/higher-education.html">Making Higher Education More Accessible and Achievable</a></li>' +
        '<li><a href="/early-childhood.html">Assessing and Shaping the Impact of Early Childhood Education</a></li>' +
        '<li><a href="/science-and-technology.html">Tracking the Careers of STEM Doctorates</a></li>' +
        '</ul></li>' +
        '<li class="arrow global-arrow"><a href="javascript:void(0)" data-area="#global">Global Development</a><svg class="arrow-img" data-activeColor="#6D3670"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
        '<ul class="dropdown-menu global-dropdown">' +
        '<li><a href="/index.html#home/4" class="trigger-slider"">Overview</a></li><li><a href="/usaid-evaluations.html">Measuring Impact and Improving Performance</a></li>' +
        '<li><a href="/complex-projects.html">Assessing the Impact of Complex Projects</a></li>' +
        '<li><a href="/real-time-adaptability.html">Adapting Timelines and Methodologies to Conditions on the Ground</a></li>' +
        '<li><a href="/vulnerable-populations.html">Reaching Vulnerable Populations in Fragile Environments</a></li>' +
        '<li><a href="/closed-societies.html">Peering into Closed Societies</a></li>' +
        '<li><a href="/global-portfolio.html">NORC\’s Global Portfolio</a></li>' +
        '</ul></li>' +
        '<li class="arrow health-arrow"><a href="javascript:void(0)" data-area="#health">Health and Well-Being</a><svg class="arrow-img" data-activeColor="#5a7f94"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
        '<ul class="dropdown-menu health-dropdown">' +
        '<li><a href="/index.html#home/5" class="trigger-slider"">Overview</a></li><li><a href="/medicare-medicaid.html">Making Medicare and Medicaid More Effective</a></li>' +
        '<li><a href="/patient-risk.html">Using Data to Improve Safety and Quality</a></li>' +
        '<li><a href="/diverse-stakeholders.html">Working with Providers, Payers, and Other Stakeholders</a></li>' +
        '<li><a href="/opioid-epidemic.html">Visualizing Disease Vulnerability</a></li>' +
        '<li><a href="/health-culture.html">Cultivating a Culture of Health</a></li>' +
        '<li><a href="/zika-awareness.html">Assessing Americans\’ Zika Awareness</a></li>' +
        '</ul></li>' +
        '<li class="arrow society-arrow"><a href="javascript:void(0)" data-area="#soc" >Society, Media, and Public Affairs</a><svg class="arrow-img" data-activeColor="#F27E71"><use xlink:href="img/arrow2.svg#off"></use></svg>' +
        '<ul class="dropdown-menu society-dropdown">' +
        '<li><a href="/index.html#home/6" class="trigger-slider"">Overview</a></li><li><a href="/aging.html">Informing Policy on Retirement and Aging</a></li>' +
        '<li><a href="/intimate-partner-violence.html">Combating Intimate Partner Violence</a></li>' +
        '<li><a href="/minds-and-media.html">Tracking Americans\’ Opinions and the Media That Inform Them</a></li>' +
        '<li><a href="/teen-surveys.html">Tapping into the Minds and Behaviors of Teens</a></li>' +
        '<li><a href="/disaster-fatalities.html">Understanding How Disasters Kill</a></li>' +
        '<li><a href="/smoking-and-social-media.html">Mapping Smoking Policies to Behavior</a></li>' +
        '</ul></li>' +
        '<li class="divider"><hr /></li>' +
        '<li><a href="/index.html#home/7" class="trigger-slider check-url">Gain More Insight</a></li>' +
        ' <li><a href="/infographics.html" class="trigger-slider check-url">Infographics and Interactive Visualizations</a></li> ' +
        '</ul>'
    );
    var isIE11s = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
    if (isIE11s == true) {
        $.getScript('/js/svg4everybody.js').done(function(script, textStatus) {
            setTimeout(function() {
                svg4everybody();
            }, 300);
        });
    }

    // Internal Menu Functions
    $('.arrow-img').on('click', function() {
        $('.dropdown-menu').slideUp(200);
        $('.arrow a').removeClass('active');
        // $('.arrow-img').attr('src', 'img/arrow.svg');
        // text color changes...leaving arrow grey
        $("svg.arrow-img").each(function() {
            $(this).children().attr("xlink:href", "img/arrow2.svg#off");
            if (isIE11s == true) {
                $(this).children().attr("fill", "#919191");
            }
        });
        if (isIE11s == true) {

        }
        //setTimeout(function(){
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $("svg.arrow-img").each(function() {
                $(this).children().attr("xlink:href", "img/arrow2.svg#off");
                if (isIE11s == true) {
                    $(this).children().attr("fill", "#919191");
                }
            });
        } else {
            $('.arrow-img').removeClass('open');
            $(this).prev().addClass('active');
            $(this).next('ul').slideDown(200);
            $(this).addClass('open');

            $(this).children().attr("xlink:href", "img/arrow2.svg" + $(this).prev().attr("data-area"));
            if (isIE11s == true) {
                $(this).children().attr("fill", $(this).attr("data-activecolor"));
            }

            // $(this).addClass('open').attr('src', 'img/arrow-orange.svg');
        }
        //},500);
    });

    var windowWidth = $(window).width();

    if (windowWidth >= 768) {
        $('.trigger-slider').on('click', function() {
            $('#intro-overlay').fadeOut(1000); // Hides Intro Animation Overlay if visible
            $('.typed-first, .typed-second, .ti-cursor').html(""); // Stops Intro Animation if playing
            $('.white-page-overlay').fadeOut(300);
            $('.share-button').css('z-index', 99);
            $('.menu-button').css('z-index', 200);
            $('.menu-container').removeClass('moved');
            $("body").removeClass('no-scroll'); // body to scroll again
            $('.arrow a').removeClass('active');
            $('.arrow-img').attr('src', 'img/arrow.svg').removeClass('open');
            $('.dropdown-menu').slideUp(200);

            var whatPage = $('body').attr('class');
            if (whatPage.indexOf('main') >= 0) {
                $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button-white.svg');
            } else {
                $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button.svg');
            }
        });
    }


});

$(window).on("load", function() {

    $(".menu-container li ul li:first-child a, a.check-url").bind("click", function(e) {
        testurl = window.location.href;
        if (testurl.indexOf("index.html") > -1) {
            $('.white-page-overlay').fadeOut(300);
            $('.share-button').css('z-index', 99);
            $('.menu-button').css('z-index', 200);
            $('.menu-container').removeClass('moved');
            $("body").removeClass('no-scroll');
            $('.menu-button').removeClass('menu-open').attr('src', 'img/menu-button-white.svg');
        }
    });

    $(".menu-container li.arrow > a").bind("click", function(e) {
        e.preventDefault();
        $(this).next().click();
        setsvgs = $(this).next().children().attr("xlink:href");

    });
      var isIE11s = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
    $("#gfootnote1,#dgfootnote1").attr("title", $("#footnote1 span").html()).attr("style", "cursor:pointer;").bind("click", function() {
    
    if (isIE11s == true) {
      setcurLoc=location.href;
      location.href = "index.html#home/7"//?footnotes
      localStorage.setItem("footnotes", true);
     
        var objDiv = $("#gainMore .fp-tableCell .area");
        //alert(objDiv.height())
        setTimeout(function(){
          //$("#gainMore .fp-tableCell .area").scrollTop( objDiv.scrollHeight);
          $("#gainMore .fp-tableCell .area").scrollTop($("#gainMore .fp-tableCell .area")[0].scrollHeight);
          if(setcurLoc.indexOf("index.html") > -1){
            localStorage.removeItem("footnotes");
          }
        },500)
      
    }else{
        location.href = "index.html?footnotes#home/7"
        }

    });
    setUrls = location.href;
    if (setUrls.indexOf("footnotes") > -1) {

        setGainHeight = $(".gain-more").height();
        setoffSet = $("#footnote1").offset()
        var elmnt = document.getElementById("footnote1");
        elmnt.scrollIntoView();
        history.pushState('', document.title, window.location.pathname);
        location.hash="#home/7"
        //alert($('#gainMore').html())
         //           $('.gain-more').show();
    }
    getLocStor=localStorage.getItem("footnotes");
    
    var isIE11s = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
    if (isIE11s == true) {
      //alert(getLocStor);
      //console.log(getLocStor);
    if(getLocStor=="true"){console.log(getLocStor);
      setTimeout(function(){
       // console.log($("#gainMore .fp-tableCell .area")[0].scrollHeight)
      $("#gainMore .fp-tableCell .area").scrollTop($("#gainMore .fp-tableCell .area")[0].scrollHeight);
        localStorage.removeItem("footnotes");
      },500);
    }
   }

});

//alert(window.location.hostname)

$(window).on("load", function() {
    $(".special-share a").each(function() {
        tempsocLink = $(this).attr("href").replace("annualreport.norc.org", window.location.hostname).replace("%23", ".html%23");
        tempsocClick = $(this).attr("onclick").replace("annualreport.norc.org", window.location.hostname).replace("%23", ".html%23");
        $(this).attr("href", tempsocLink);
        $(this).attr("onclick", tempsocClick);
    });
    
       if($(".chart").length>0){
         templink1=$(".chart").attr("data-share-url-twitter").replace("annualreport.norc.org", window.location.hostname).replace("%23", ".html%23");
         $(".chart").attr("data-share-url-twitter",templink1);
         templink2=$(".chart").attr("data-share-url-facebook").replace("annualreport.norc.org", window.location.hostname).replace("%23", ".html%23");
         $(".chart").attr("data-share-url-facebook",templink2);
         templink3=$(".chart").attr("data-share-url-linkedin").replace("annualreport.norc.org", window.location.hostname).replace("%23", ".html%23");
         $(".chart").attr("data-share-url-linkedin",templink3);
       }

});
