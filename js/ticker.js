// Opening Animations

$('#typed-first').typeIt({
  strings: ["<h3>Insight</h2>"],
     speed: 60,
     cursor: false,
     breakLines: false
});

$('#typed-second').typeIt({
  speed: 60,
  cursor: false,
  breakLines: false,
  startDelay: 1050,
  deleteDelay: 3000
  })
  .tiType("<h3>for Social<br />Change</h3>").tiPause(500).tiDelete()
  .tiSettings({speed: 50}).tiType("<h3>for Impact</h3>").tiPause(400).tiDelete()
  .tiSettings({speed: 40}).tiType("<h3>is Scalable</h3>").tiPause(400).tiDelete()
  .tiSettings({speed: 40}).tiType("<h3>for Social<br />Justice</h3>").tiPause(400).tiDelete()
  .tiSettings({speed: 30}).tiType("<h3>for Social<br />Change</h3>").tiPause(300).tiDelete()
  .tiSettings({speed: 30}).tiType("<h3>from Partnerships</h3>").tiPause(300).tiDelete()
  .tiSettings({speed: 30}).tiType("<h3>is Practical</h3>").tiPause(300).tiDelete()
  .tiSettings({speed: 20}).tiType("<h3>for Social<br />Justice</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 20}).tiType("<h3>from Experience</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 20}).tiType("<h3>for All</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 10}).tiType("<h3>for Impact</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 10}).tiType("<h3>is Scalable</h3>").tiPause(100).tiDelete()
  .tiSettings({speed: 10}).tiType("<h3>from Evaluation</h3>").tiPause(100).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>for All</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>from Partnerships</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>is Practical</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>from Evaluation</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>from Experience</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>at Work</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>for Impact</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>for Everyone</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>at Work</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>for Impact</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>for Everyone</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>for Informed<br />Decisions</h3>");
