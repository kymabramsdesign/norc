// Opening Animations

$('.typed-first').typeIt({
  strings: ["<h3>Insight for</h2>"],
  speed: 60,
  cursor: false,
  breakLines: false,
  callback: function(){
  $('.typed-second').typeIt({
    speed: 60,
    cursor: true,
    breakLines: false,
    })
  .tiPause(800).tiType("<h3>Citizens</h3>").tiPause(500).tiDelete()
  .tiSettings({speed: 50}).tiType("<h3>the Common Good</h3>").tiPause(400).tiDelete()
  .tiSettings({speed: 40}).tiType("<h3>Educators</h3>").tiPause(400).tiDelete()
  .tiSettings({speed: 40}).tiType("<h3>Families</h3>").tiPause(400).tiDelete()
  .tiSettings({speed: 30}).tiType("<h3>Caregivers</h3>").tiPause(300).tiDelete()
  .tiSettings({speed: 30}).tiType("<h3>Policymakers</h3>").tiPause(300).tiDelete()
  .tiSettings({speed: 30}).tiType("<h3>Public Discourse</h3>").tiPause(300).tiDelete()
  .tiSettings({speed: 20}).tiType("<h3>Businesses</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 20}).tiType("<h3>Nonprofits</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 20}).tiType("<h3>Difference Making</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 20}).tiType("<h3>Data Analysis</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 20}).tiType("<h3>Data Management</h3>").tiPause(200).tiDelete()
  .tiSettings({speed: 10}).tiType("<h3>Data Security</h3>").tiPause(100).tiDelete()
  .tiSettings({speed: 10}).tiType("<h3>Health</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 10}).tiType("<h3>Safety</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>the Economy</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Governments</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Evaluation</h3>").tiPause(50).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Analysis</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Planning</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Strategy</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Decision-making</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Democracy</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Data Literacy</h3>").tiPause(0).tiDelete()
  .tiSettings({speed: 0}).tiType("<h3>Informed Decisions</h3>");}
});


