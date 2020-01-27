//TO DO:
//=======================

//either users choices are right or not
//either time runs out or user clicks done
//there are right answers that are recorded (then displayed)
//incorrect answers recorded and displayed

//GLOBAL VARIABLES
//==============================================
var intervalId;
//took this from the stopwatch activity
// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 120;
//stores answers
var correctAnsw = 0;

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
      timeoutOrDone();
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

  //collect score once done or times out...that way don't have to worry about collecting score when a click happens

  //check if each question is correct with an if statement. see if input w class of this value is checked

  //display tally of correct answers, incorrect answers and unanswered
  //function for time out and done button
  function timeoutOrDone() {
    $(".triviaPage").hide();
    $("#done-button").hide();
    $("#score-page").show();
    console.log("reached 0");

    clearInterval(intervalId);
    if ($("input:radio[class='correct1']").is(":checked")) {
      correctAnsw++;
      console.log("correctansw increasing");
    }
    if ($("input:radio[class='correct2']").is(":checked")) {
      correctAnsw++;
      console.log("correctansw increasing");
    }
    if ($("input:radio[class='correct3']").is(":checked")) {
      correctAnsw++;
      console.log("correctansw increasing");
    }
    if ($("input:radio[class='correct4']").is(":checked")) {
      correctAnsw++;
      console.log("correctansw increasing");
    }
    if ($("input:radio[class='correct5']").is(":checked")) {
      correctAnsw++;
      console.log("correctansw increasing");
    }
    if ($("input:radio[class='correct6']").is(":checked")) {
      correctAnsw++;
      console.log("correctansw increasing");
    }

    $("#correct-text").text("Correct Answers: " + correctAnsw);
    $("#incorrect-text").append(6 - correctAnsw);
  }

  //when done button clicked, triviaPage hidden and score-page revealed
  $("#done-button").click(function() {
    timeoutOrDone();
  });
});
