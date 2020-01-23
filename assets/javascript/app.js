//TO DO:
//=======================
//user chooses answers
//either time runs out or user clicks done
//there are right answers that are recorded (then displayed)
//unanswered counted and recorded (then displayed)
//incorrect answers recorded and displayed

//GLOBAL VARIABLES
//==============================================
var intervalId;
//took this from the stopwatch activity
// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
//FUNCTIONS
//==============================================
$(document).ready(function() {
  //on page load, triviaPage and Score-Page are hidden
  $(".triviaPage").hide();
  $("#score-page").hide();
});

//when start button clicked, triviaPage revealed, and start button hidden
$("#start").click(function() {
  $(".triviaPage").show();
  $("#start").hide();
  //start the countdown, function called
  start();
  //timer counts down from 120 seconds (displayed on screen)
  $("#time-remaining").text("2:00");

  function start() {
    // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(count, 120000);
      clockRunning = true;
    }
  }

  function count() {
    // decrement time by 1
    time--;

    //  Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

    // Use the variable we just created to show the converted time in the "time-remaining" div.
    $("#time-remaining").text(converted);
  }

  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
});

//when done button clicked, triviaPage hidden and score-page revealed
$("#done-button").click(function() {
  $(".triviaPage").hide();
  $("#done-button").hide();
  $("#score-page").show();
});
