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
        $(".card-body1").html("Wrong! The correct answer is Barcelona FC");
        console.log('incorrect ' + incorrectAns);
        updateScore();
    });

    $('.correct1').on('click', function () {
        correctAns++;
        $(".wrong1").hide();
        $(".correct1").hide();
        $(".card-body1").html("You are correct!");
        console.log('correct ' + correctAns);
        updateScore();
    });

    $('.wrong2').on('click', function () {
        incorrectAns++;
        $(".wrong2").hide();
        $(".correct2").hide();
        $(".card-body2").html("Wrong! The correct answer is Madeira,Portugal");
        console.log('incorrect ' + incorrectAns);
        updateScore();
    });

    $('.correct2').on('click', function () {
        correctAns++;
        $(".wrong2").hide();
        $(".correct2").hide();
        $(".card-body2").html("You are correct!");
        console.log('correct ' + correctAns);
        updateScore();
    });

    $('.wrong3').on('click', function () {
        incorrectAns++;
        $(".wrong3").hide();
        $(".correct3").hide();
        $(".card-body3").html("Wrong! The correct answer is France");
        console.log('incorrect ' + incorrectAns);
        updateScore();
    });

    $('.correct3').on('click', function () {
        correctAns++;
        $(".wrong3").hide();
        $(".correct3").hide();
        $(".card-body3").html("You are correct!");
        console.log('correct ' + correctAns);
        updateScore();
    });

    $('.wrong4').on('click', function () {
        incorrectAns++;
        $(".wrong4").hide();
        $(".correct4").hide();
        $(".card-body4").html("Wrong! The correct answer is Liverpool");
        console.log('incorrect ' + incorrectAns);
        updateScore();
    });

    $('.correct4').on('click', function () {
        correctAns++;
        $(".wrong4").hide();
        $(".correct4").hide();
        $(".card-body4").html("You are correct!");
        console.log('correct ' + correctAns);
        updateScore();
    });

    $('.submit').on('click', function () {
        console.log('Thanks for playing!');
        updateScore();
        stop();
        alert("Thanks for playing! Refresh the page to try again!" + ("\nIncorrect Answers:  " + incorrectAns) + ('\nCorrectAnswers: ' + correctAns));
    });
});
