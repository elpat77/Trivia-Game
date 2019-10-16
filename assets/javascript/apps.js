$(document).ready(function () {
    console.log('hi');
});

var number;
var intervalId;

function run() {
    number = 1000;
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
    }
}
run();


var myQuestions = [
    {
        question: "In what Club Team does Lionel Messi currently play?",
        answer: {
            a: "Real Madrid",
            b: "Manchester United",
            c: "Barcelona FC",
            d: "Bayern Munich"
        },
        correctAnswer: "c"
    },
    {
        question: "Where is Cristiano Ronaldo from?",
        answer: {
            a: "Madrid, Spain",
            b: "Madeira, Portugal",
            c: "Milan, Italy",
            d: "London, England"
        },
        correctAnswer: "b"
    },
    {
        question: "What national team won the World Cup in 2018?  ",
        answer: {
            a: "England",
            b: "Brazil",
            c: "Mexico",
            d: "France"
        },
        correctAnswer: "d"
    },
    {
        question: "What clubs team won the Champions League in 2019 ",
        answer: {
            a: "Liverpool",
            b: "Ajax",
            c: "Bayern Munich",
            d: "Barcelona FC"
        },
        correctAnswer: "a"
    }
]

console.log('my questions', myQuestions);
console.log(myQuestions.forEach((myQuestions) => console.log('your questions ', myQuestions.question)));
console.log(myQuestions.forEach((myQuestions) => console.log('your answers', myQuestions.answer)));
console.log(myQuestions.forEach((myQuestions) => console.log('correct ', myQuestions.correctAnswer)));

// console.log(myQuestions.question);
// console.log(myQuestions.answer);
// console.log(myQuestions[0].question);
// console.log(myQuestions[0].answer);
// console.log(myQuestions[0].answer.a);

function updateQuestions() {
    $(document).ready(function () {
        $('#question1').html(myQuestions[0].question);
        $('#question2').html(myQuestions[1].question);
        $('#question3').html(myQuestions[2].question);
        $('#question4').html(myQuestions[3].question);
    });
}
updateQuestions()


function updateAnswers() {
    $(document).ready(function () {
        $('label[for=answer1]').html(myQuestions[0].answer.a);
        $('label[for=answer2]').html(myQuestions[0].answer.b);
        $('label[for=answer3]').html(myQuestions[0].answer.c);
        $('label[for=answer4]').html(myQuestions[0].answer.d);
    }
    );
}

updateAnswers()


//  https://www.khanacademy.org/computing/computer-programming/html-js-jquery/form-processing-jquery/pt/processing-a-quiz-with-jquery 
//  $("#quiz-form").on("submit", function(event) {
//     event.preventDefault();
//     var $answer = $("#quiz-answer"); 
//     var answer = $answer.val();
//     console.log(answer);
//     if (answer === "crocodile") {
//         $("#result").text("Woweeee! You got it! WOOO PARTY!");
//     } else {
//         $("#result").text("Try again!");
//     }


