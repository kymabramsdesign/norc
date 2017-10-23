// menu functions

$('.menu-button').on('click', function() {
  $('.page-overlay').fadeIn(300);
  $('.share-button').css('z-index',100);
  $('.menu-button').css('z-index',300);
});

//Full Menu

$(window).bind("load", function() {
   $('.menu-container').html(
    '<ul>'+
    '<li>Insight 2017</li>' +
    '<li>President’s Essay</li>' +
    '<li class="divider"><hr /></li>' +
    '<li class="arrow">Economics, Markets, and the Workforce</li>' +
    '<li class="arrow">Education, Training, and Learning</li>' +
    '<li class="arrow">Global Development</li>' +
    '<li class="arrow">Health and Wellbeing</li>' +
    '<li class="arrow">Society, Media, and Public Affairs</li>' +
    '<li class="arrow">Science and Innovation</li>' +
    '<li class="arrow">Leadership and Trustees</li>' +
    '<li class="divider"><hr /></li>' +
    '<li>GAIN MORE INSIGHT</li>' +
    '</ul>');
});
