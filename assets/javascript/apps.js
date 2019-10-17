$(document).ready(function () {
    console.log('hi');
    updateQuestions();
    updateAnswers();
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
console.log(myQuestions.forEach((questions) => console.log('your questions ', questions.question)));
console.log(myQuestions.forEach((answers) => console.log('your answers', answers.answer)));
console.log(myQuestions.forEach((correct) => console.log('correct ', correct.correctAnswer)));

// console.log(myQuestions.question);
// console.log(myQuestions.answer);
// console.log(myQuestions[0].question);
// console.log(myQuestions[0].answer);
// console.log(myQuestions[0].answer.a);

function updateQuestions() {
    for (let index = 0; index < myQuestions.length; index++) {
        $('#question' + (index + 1)).html(myQuestions[index].question);

    }
}



function updateAnswers() {
    // for (let index = 0; index < myQuestions.length; index++) {
    //     $('#answers' + (index + 1)).html(myQuestions[index].question);

    $('label[for=answer1]').html(myQuestions[0].answer.a);
    $('label[for=answer2]').html(myQuestions[0].answer.b);
    $('label[for=answer3]').html(myQuestions[0].answer.c);
    $('label[for=answer4]').html(myQuestions[0].answer.d);
    $('label[for=q2answer1]').html(myQuestions[1].answer.a);
    $('label[for=q2answer2]').html(myQuestions[1].answer.b);
    $('label[for=q2answer3]').html(myQuestions[1].answer.c);
    $('label[for=q2answer4]').html(myQuestions[1].answer.d);
    $('label[for=q3answer1]').html(myQuestions[2].answer.a);
    $('label[for=q3answer2]').html(myQuestions[2].answer.b);
    $('label[for=q3answer3]').html(myQuestions[2].answer.c);
    $('label[for=q3answer4]').html(myQuestions[2].answer.d);
    $('label[for=q4answer1]').html(myQuestions[3].answer.a);
    $('label[for=q4answer2]').html(myQuestions[3].answer.b);
    $('label[for=q4answer3]').html(myQuestions[3].answer.c);
    $('label[for=q4answer4]').html(myQuestions[3].answer.d);
}




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


