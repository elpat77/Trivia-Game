$(document).ready(function () {
    var number;
    var intervalId;

    function start() {
        number = 10;
    }
    start();


    function run() {
        // number = 10;
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
        $("#show-number").html("<h2>" + " Time Remaining: " + number + "</h2>");
        //  Once number hits zero...
        if (number === 0) {
            //  ...run the stop function.
            stop();
            //  Alert the user that time is up.
            alert("Time is Up!");
            start();
        }
    }

    run();

    var myQuestions = [
        {
            question: "In what Club Team does Lionel Messi currently play?",
            answers: ["Real Madrid", "Manchester United", "Barcelona FC", "Bayern Munich"],
            correctAnswer: 2
        },
        {
            question: "Where is Cristiano Ronaldo from?",
            answers: ["Madrid, Spain", "Madeira, Portugal", "Milan, Italy", "London, England"],
            correctAnswer: 1
        },
        {
            question: "What national team won the World Cup in 2018?  ",
            answers: ["England", "Brazil", "Mexico", "France"],
            correctAnswer: 3
        },
        {
            question: "What clubs team won the Champions League in 2019 ",
            answers: ["Liverpool", "Ajax", "Bayern Munich", "Barcelona FC"],
            correctAnswer: 0
        }
    ]

    let html = '<center>';

    myQuestions.forEach((questionObject, questionIndex) => {
        html += `<h2 id="question-${questionIndex}">${questionObject.question}</h2>`;

        questionObject.answers.forEach(answer => {
            html += `<input type="radio" id="${answer}" name="${questionIndex}'"></input><label> ${answer} </label><br>`;
        })
    });

    $('#questions').html(html);
});


