//TO DO:
//=======================
//left off around line 47
//user chooses answers
//either users choices are right or not
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
var time = 120;
//FUNCTIONS
//==============================================
$(document).ready(function() {
  //on page load, triviaPage and Score-Page are hidden
  $(".triviaPage").hide();
  $("#score-page").hide();

  function start() {
    console.log("start func working");

    // Use setInterval to start the count here and set the clock to running...for 2 minutes
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
      console.log("clock is running");
    }
  }

  function count() {
    // decrement time by 1
    time--;
    console.log("count", time);

    //  Get the current time, pass that into the timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);
    console.log(converted);

    // Use the variable we just created to show the converted time in the "time-remaining" div.
    $("#time-remaining").text(converted);

    //clear the interval so that time doesn't go negative
    if (time === 0) {
      console.log("reached 0");

      function stopTimerFunction() {
        clearInterval(intervalId);
      }
      stopTimerFunction();
    }
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

  //when start button clicked, triviaPage revealed, and start button hidden
  $("#start").click(function() {
    //I'm running btw
    console.log("i'm working");

    $(".triviaPage").show();
    $("#start").hide();
    //start the countdown, function called
    start();
    //timer counts down from 120 seconds (displayed on screen)
    $("#time-remaining").text("2:00");
  });

  //when done button clicked, triviaPage hidden and score-page revealed
  $("#done-button").click(function() {
    $(".triviaPage").hide();
    $("#done-button").hide();
    $("#score-page").show();
  });
});
