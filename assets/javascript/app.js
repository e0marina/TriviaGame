//TO DO:
//=======================

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
//stores correct answers
var correctAnsw = 0;
var incorrectAnsw = 0;
var unAnsw = 0;
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
      $(".triviaPage").hide();
      $("#done-button").hide();
      $("#score-page").show();
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

  //listen for users choice on each question
  $("input[type='radio']").click(function() {
    var radioValueQ1 = $("input[name='caffeine']:checked").val();
    console.log(radioValueQ1);
  });
  $("input[type='radio']").click(function() {
    var radioValueQ2 = $("input[name='state']:checked").val();
    console.log(radioValueQ2);
  });

  // var radioValueQ3 = $("input[name='bean']:checked").val();
  // var radioValueQ4 = $("input[name='country']:checked").val();
  // var radioValueQ5 = $("input[name='cost']:checked").val();
  // var radioValueQ5 = $("input[name='avg']:checked").val();

  // //compare user choice to correct answer on each question
  // if (
  //   radioValueQ1 === "light roast" ||
  //   radioValueQ2 === "hawaii" ||
  //   radioValueQ3 === "brazil" ||
  //   radioValueQ4 === "100bill" ||
  //   radioValueQ5 === "1100"
  // ) {
  //   console.log("you're correct!");
  //   correctAnsw++;
  // } else {
  //   console.log("incorrect!");
  // }

  // //if user chooses correct answer...
  // $(".correct").click(function() {
  //   //test this function is working
  //   console.log("correct answer!");
  //   //increase count of correct answers
  //   correctAnsw++;
  // });

  //display tally of correct answers, incorrect answers and unanswered

  //when done button clicked, triviaPage hidden and score-page revealed
  $("#done-button").click(function() {
    $(".triviaPage").hide();
    $("#done-button").hide();
    $("#score-page").show();
  });
});
