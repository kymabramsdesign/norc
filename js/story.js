$(document).ready( function() {

  if ( $('body').hasClass('story-page')) {
      var object = document.getElementById("logo");
      var svgDocument = object.contentDocument;
      var svgb1 = svgDocument.getElementsByClassName("tagline");
      var svgb2 = svgDocument.getElementsByClassName("nrc");
      var svgb2 = svgDocument.getElementsByClassName("star");
      svgb1[0].setAttribute("fill", "yellow");
      svgb2[0].setAttribute("fill", "red");
      svgb3[0].setAttribute("fill", "red");
  }

});
