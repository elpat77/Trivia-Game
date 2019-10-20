$(document).ready(function () {
    //creating a timer that starts automatically
    var number;
    var intervalId;

    function run() {
        number = 45;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function stop() {
        clearInterval(intervalId);
    }

    //  The decrement function.
    function decrement() {
        //  Decrease number by one.
        number--;
        //  Show the number in the #show-number tag.
        $(".show-number").html("<h2>" + " Time Remaining: " + number + "</h2>");
        //  Once number hits zero...
        if (number === 0) {
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            alert("Time is Up! Refresh the page to try again!" + ("\nIncorrect Answers:  " + incorrectAns) + ('\nCorrectAnswers: ' + correctAns));
            updateScore();
        }
    }
    run();


    let incorrectAns = 0;
    let correctAns = 0;

    function updateScore() {
        $(document).ready(function () {
            $("#incorrectAns").text(incorrectAns);
            $("#correctAns").text(correctAns);
        });
    }
    updateScore();

    $('.wrong1').on('click', function () {
        incorrectAns++;
        $(".wrong1").hide();
        $(".correct1").hide();
        console.log('incorrect ' + incorrectAns);
    });

    $('.correct1').on('click', function () {
        correctAns++;
        $(".wrong1").hide();
        $(".correct1").hide();
        console.log('correct ' + correctAns);
    });

    $('.wrong2').on('click', function () {
        incorrectAns++;
        $(".wrong2").hide();
        $(".correct2").hide();
        console.log('incorrect ' + incorrectAns);
    });

    $('.correct2').on('click', function () {
        correctAns++;
        $(".wrong2").hide();
        $(".correct2").hide();
        console.log('correct ' + correctAns);
    });

    $('.wrong3').on('click', function () {
        incorrectAns++;
        $(".wrong3").hide();
        $(".correct3").hide();
        console.log('incorrect ' + incorrectAns);
    });

    $('.correct3').on('click', function () {
        correctAns++;
        $(".wrong3").hide();
        $(".correct3").hide();
        console.log('correct ' + correctAns);
    });

    $('.wrong4').on('click', function () {
        incorrectAns++;
        $(".wrong4").hide();
        $(".correct4").hide();
        console.log('incorrect ' + incorrectAns);
    });

    $('.correct4').on('click', function () {
        correctAns++;
        $(".wrong4").hide();
        $(".correct4").hide();
        console.log('correct ' + correctAns);
    });

    $('.submit').on('click', function () {
        console.log('Thanks for playing!');
        updateScore();
        stop();
        alert("Thanks for playing! Refresh the page to try again!" + ("\nIncorrect Answers:  " + incorrectAns) + ('\nCorrectAnswers: ' + correctAns));
    });
});
