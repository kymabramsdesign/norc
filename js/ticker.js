// Opening Animations
function runIntroAnimation(){
  var windowWidth = $(window).width();

  if ( windowWidth >= 768 ) { 
    $('.typed-first').typeIt({
      strings: ["<h3>Insight for</h2>"],
      speed: 60,
      cursor: false,
      breakLines: false,
      callback: function(){
      $('.typed-second').typeIt({
        speed: 62,
        cursor: true,
        breakLines: false,
        callback: function() {
          $('#intro-overlay').fadeOut(700);
          $('.ti-cursor').remove();
        }
      })
      .tiPause(1300).tiSettings({deleteSpeed: 0}).tiType("<h3>Informed Decisions</h3>").tiPause(450).tiDelete().tiPause(1200)
      .tiSettings({speed: 48,deleteSpeed: 0}).tiType("<h3>Thriving Families</h3>").tiPause(400).tiDelete().tiPause(1100)
      .tiSettings({speed: 44,deleteSpeed: 0}).tiType("<h3>Safer Communities</h3>").tiPause(350).tiDelete()
      .tiSettings({speed: 40,deleteSpeed: 0}).tiType("<h3>Better Schools</h3>").tiPause(300).tiDelete()
      .tiSettings({speed: 30,deleteSpeed: 0}).tiType("<h3>Growing Economies</h3>").tiPause(250).tiDelete()
      .tiSettings({speed: 26,deleteSpeed: 0}).tiType("<h3>Engaged Citizens</h3>").tiPause(200).tiDelete()
      .tiSettings({speed: 22,deleteSpeed: 0}).tiType("<h3>Responsive Policies</h3>").tiPause(200).tiDelete()
      .tiSettings({speed: 20,deleteSpeed: 0}).tiType("<h3>Responsible Governance</h3>").tiPause(175).tiDelete()
      .tiSettings({speed: 18,deleteSpeed: 0}).tiType("<h3>Vibrant Cultures</h3>").tiPause(150).tiDelete()
      .tiSettings({speed: 16,deleteSpeed: 0}).tiType("<h3>Rigorous Science</h3>").tiPause(125).tiDelete()
      .tiSettings({speed: 14,deleteSpeed: 0}).tiType("<h3>Innovative Business</h3>").tiPause(100).tiDelete()
      .tiSettings({speed: 12,deleteSpeed: 0}).tiType("<h3>Pressing Challenges</h3>").tiPause(90).tiDelete()
      .tiSettings({speed: 10,deleteSpeed: 0}).tiType("<h3>Emerging Opportunities</h3>").tiPause(80).tiDelete()
      .tiSettings({speed: 9,deleteSpeed: 0}).tiType("<h3>Human Development</h3>").tiPause(70).tiDelete()
      .tiSettings({speed: 8,deleteSpeed: 0}).tiType("<h3>Social Discourse</h3>").tiPause(60).tiDelete()
      .tiSettings({speed: 7,deleteSpeed: 0}).tiType("<h3>Creative Collaboration</h3>").tiPause(50).tiDelete()
      .tiSettings({speed: 6,deleteSpeed: 0}).tiType("<h3>Unbiased Analysis</h3>").tiPause(40).tiDelete()
      .tiSettings({speed: 5,deleteSpeed: 0}).tiType("<h3>Data Literacy</h3>").tiPause(30).tiDelete()
      .tiSettings({speed: 4,deleteSpeed: 0}).tiType("<h3>Effective Planning</h3>").tiPause(20).tiDelete()
      .tiSettings({speed: 3,deleteSpeed: 0}).tiType("<h3>Actionable Evaluations</h3>").tiPause(10).tiDelete()
      .tiSettings({speed: 2,deleteSpeed: 0}).tiType("<h3>Healthy Aging</h3>").tiPause(0).tiDelete()
      .tiSettings({speed: 1,deleteSpeed: 0}).tiType("<h3>Lifelong Learning</h3>").tiPause(0).tiDelete()
      .tiSettings({speed: 0,deleteSpeed: 0}).tiType("<h3>Productive Conversation</h3>").tiPause(0).tiDelete()
      .tiSettings({speed: 0,deleteSpeed: 0}).tiType("<h3>a Stronger Nation</h3>").tiPause(0).tiDelete()
      .tiSettings({speed: 0}).tiType("<h3>a Better World</h3>").tiPause(1800);
      }
    });

      $('.skip-intro p').delay(2000).fadeIn(1000);
  }

  else {
    $('.typed-first').typeIt({
      strings: ["<h3>Insight for</h2>"],
      speed: 40,
      cursor: false,
      breakLines: false,
      callback: function(){
      $('.typed-second').typeIt({
        speed: 38,
        cursor: true,
        breakLines: false,
        callback: function() {
          $('#intro-overlay').fadeOut(700);
          $('.ti-cursor').remove();
        }
      })
      .tiPause(600).tiSettings({deleteSpeed: 0}).tiType("<h3>Informed<br />Decisions</h3>").tiPause(220).tiDelete()
      .tiSettings({speed: 36,deleteSpeed: 0}).tiType("<h3>Thriving<br />Families</h3>").tiPause(210).tiDelete()
      .tiSettings({speed: 34,deleteSpeed: 0}).tiType("<h3>Safer<br />Communities</h3>").tiPause(200).tiDelete()
      .tiSettings({speed: 32,deleteSpeed: 0}).tiType("<h3>Better<br />Schools</h3>").tiPause(190).tiDelete()
      .tiSettings({speed: 30,deleteSpeed: 0}).tiType("<h3>Growing<br />Economies</h3>").tiPause(180).tiDelete()
      .tiSettings({speed: 28,deleteSpeed: 0}).tiType("<h3>Engaged<br />Citizens</h3>").tiPause(170).tiDelete()
      .tiSettings({speed: 26,deleteSpeed: 0}).tiType("<h3>Responsive<br />Policies</h3>").tiPause(160).tiDelete()
      .tiSettings({speed: 24,deleteSpeed: 0}).tiType("<h3>Responsible<br />Governance</h3>").tiPause(150).tiDelete()
      .tiSettings({speed: 22,deleteSpeed: 0}).tiType("<h3>Vibrant<br />Cultures</h3>").tiPause(140).tiDelete()
      .tiSettings({speed: 20,deleteSpeed: 0}).tiType("<h3>Rigorous<br />Science</h3>").tiPause(130).tiDelete()
      .tiSettings({speed: 18,deleteSpeed: 0}).tiType("<h3>Innovative<br />Business</h3>").tiPause(120).tiDelete()
      .tiSettings({speed: 16,deleteSpeed: 0}).tiType("<h3>Pressing<br />Challenges</h3>").tiPause(110).tiDelete()
      .tiSettings({speed: 14,deleteSpeed: 0}).tiType("<h3>Emerging<br />Opportunities</h3>").tiPause(100).tiDelete()
      .tiSettings({speed: 12,deleteSpeed: 0}).tiType("<h3>Human<br />Development</h3>").tiPause(90).tiDelete()
      .tiSettings({speed: 10,deleteSpeed: 0}).tiType("<h3>Social<br />Discourse</h3>").tiPause(80).tiDelete()
      .tiSettings({speed: 9,deleteSpeed: 0}).tiType("<h3>Creative<br />Collaboration</h3>").tiPause(70).tiDelete()
      .tiSettings({speed: 8,deleteSpeed: 0}).tiType("<h3>Unbiased<br />Analysis</h3>").tiPause(60).tiDelete()
      .tiSettings({speed: 7,deleteSpeed: 0}).tiType("<h3>Data<br />Literacy</h3>").tiPause(50).tiDelete()
      .tiSettings({speed: 6,deleteSpeed: 0}).tiType("<h3>Effective<br />Planning</h3>").tiPause(40).tiDelete()
      .tiSettings({speed: 5,deleteSpeed: 0}).tiType("<h3>Actionable<br />Evaluations</h3>").tiPause(30).tiDelete()
      .tiSettings({speed: 4,deleteSpeed: 0}).tiType("<h3>Healthy<br />Aging</h3>").tiPause(20).tiDelete()
      .tiSettings({speed: 3,deleteSpeed: 0}).tiType("<h3>Lifelong<br />Learning</h3>").tiPause(10).tiDelete()
      .tiSettings({speed: 2,deleteSpeed: 0}).tiType("<h3>Productive<br />Conversation</h3>").tiPause(0).tiDelete()
      .tiSettings({speed: 1,deleteSpeed: 0}).tiType("<h3>a Stronger<br />Nation</h3>").tiPause(0).tiDelete()
      .tiSettings({speed: 0,deleteSpeed: 0}).tiType("<h3>a Better World</h3>").tiPause(1000);
      }
    });

    $('.skip-intro p').delay(2000).fadeIn(1000);
  }


  $('.skip-intro p').on('click', function() {
    $('#intro-overlay').fadeOut(500); // Hides Intro Animation Overlay
    $('.typed-first, .typed-second, .ti-cursor').html(""); //Stops Animation
  });
}


