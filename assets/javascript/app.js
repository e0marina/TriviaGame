$(document).ready(function() {
  //on page load, triviaPage and Score-Page are hidden
  $(".triviaPage").hide();
  $("#score-page").hide();
  //when start button clicked, triviaPage revealed, and start button hidden
  $("#start").click(function() {
    $(".triviaPage").show();
    $("#start").hide();
  });
  //when done button clicked, triviaPage hidden and score-page revealed
  $("#done-button").click(function() {
    $(".triviaPage").hide();
    $("#done-button").hide();
    $("#score-page").show();
  });
});
