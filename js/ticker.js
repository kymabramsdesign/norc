// Opening Animations

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
  .tiPause(800).tiType("<h3>Informed Decisions</h3>").tiPause(500).tiDelete()
  .tiSettings({speed: 58}).tiType("<h3>Thriving Families</h3>").tiPause(450).tiDelete()
  .tiSettings({speed: 54}).tiType("<h3>Safer Communities</h3>").tiPause(450).tiDelete()
  .tiSettings({speed: 50}).tiType("<h3>Better Schools</h3>").tiPause(350).tiDelete()
  .tiSettings({speed: 46}).tiType("<h3>Growing Economies</h3>").tiPause(350).tiDelete()
  .tiSettings({speed: 42}).tiType("<h3>Engaged Citizens</h3>").tiPause(300).tiDelete()
  .tiSettings({speed: 38}).tiType("<h3>Responsive Policies</h3>").tiPause(250).tiDelete()
  .tiSettings({speed: 34}).tiType("<h3>Responsible Governance</h3>").tiPause(225).tiDelete()
  .tiSettings({speed: 30}).tiType("<h3>Vibrant Cultures</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 28}).tiType("<h3>Rigorous Science</h3>").tiPause(175).tiDelete()
  .tiSettings({speed: 26}).tiType("<h3>Innovative Business</h3>").tiPause(150).tiDelete()
  .tiSettings({speed: 24}).tiType("<h3>Pressing Challenges</h3>").tiPause(125).tiDelete()
  .tiSettings({speed: 22}).tiType("<h3>Emerging Opportunities</h3>").tiPause(100).tiDelete()
  .tiSettings({speed: 20}).tiType("<h3>Human Development</h3>").tiPause(90).tiDelete()
  .tiSettings({speed: 18}).tiType("<h3>Social Discourse</h3>").tiPause(80).tiDelete()
  .tiSettings({speed: 16}).tiType("<h3>Creative Collaboration</h3>").tiPause(70).tiDelete()
  .tiSettings({speed: 14}).tiType("<h3>Unbiased Analysis</h3>").tiPause(60).tiDelete()
  .tiSettings({speed: 12}).tiType("<h3>Data Literacy</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 10}).tiType("<h3>Effective Planning</h3>").tiPause(40).tiDelete()
  .tiSettings({speed: 9}).tiType("<h3>Actionable Evaluations</h3>").tiPause(30).tiDelete()
  .tiSettings({speed: 8}).tiType("<h3>Healthy Aging</h3>").tiPause(20).tiDelete()
  .tiSettings({speed: 7}).tiType("<h3>Lifelong Learning</h3>").tiPause(10).tiDelete()
  .tiSettings({speed: 6}).tiType("<h3>Productive Conversation</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 5}).tiType("<h3>a Stronger Nation</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 4}).tiType("<h3>Rigorous Science</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 3}).tiType("<h3>Pressing Challenges</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 2}).tiType("<h3>Better Schools</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 1}).tiType("<h3>Thriving Families</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Vibrant Cultures</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Data Literacy</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>a Better World</h3>").tiPause(2000);
  }
});


