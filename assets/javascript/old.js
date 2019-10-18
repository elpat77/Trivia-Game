$(document).ready(function () {
    var number;
    var intervalId;

    function run() {
        number = 10;
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

    updateQuestions();
    updateAnswers();
    updateCorrect();
});









console.log('my questions', myQuestions);
// console.log(myQuestions.forEach((questions) => console.log('your questions ', questions.question)));
// console.log(myQuestions.forEach((answers) => console.log('your answers', answers.answer)));
// console.log(myQuestions.forEach((correct) => console.log('correct ', correct.correctAnswer)));

// console.log(myQuestions[0].question);
// console.log(myQuestions[0].answer);
// console.log(myQuestions[0].answer.a);

function updateQuestions() {
    for (let index = 0; index < myQuestions.length; index++) {
        $('#question' + (index + 1)).html(myQuestions[index].question);
        console.log('all questions ' + myQuestions[index].question);
    }
}

function updateCorrect() {
    for (let index = 0; index < myQuestions.length; index++) {

        console.log('correct answer ' + myQuestions[index].correctAnswer);
    }
}

function updateAnswers() {
    for (let index = 0; index < myQuestions.length; index++) {
        $('label[id=answer]').html(myQuestions[index].answers[index]);
        console.log('all answers ' + myQuestions[index].answers[index]);
        //     // console.log(index + 1)


        // $('label[for=q1answer1]').html(myQuestions[0].answer.a);
        // $('label[for=q1answer2]').html(myQuestions[0].answer.b);
        // $('label[for=q1answer3]').html(myQuestions[0].answer.c);
        // $('label[for=q1answer4]').html(myQuestions[0].answer.d);
        // $('label[for=q2answer1]').html(myQuestions[1].answer.a);
        // $('label[for=q2answer2]').html(myQuestions[1].answer.b);
        // $('label[for=q2answer3]').html(myQuestions[1].answer.c);
        // $('label[for=q2answer4]').html(myQuestions[1].answer.d);
        // $('label[for=q3answer1]').html(myQuestions[2].answer.a);
        // $('label[for=q3answer2]').html(myQuestions[2].answer.b);
        // $('label[for=q3answer3]').html(myQuestions[2].answer.c);
        // $('label[for=q3answer4]').html(myQuestions[2].answer.d);
        // $('label[for=q4answer1]').html(myQuestions[3].answer.a);
        // $('label[for=q4answer2]').html(myQuestions[3].answer.b);
        // $('label[for=q4answer3]').html(myQuestions[3].answer.c);
        // $('label[for=q4answer4]').html(myQuestions[3].answer.d);
    }



    // for (let index = 0; index < myQuestions.length; index++) {
    //     // $('#answers').html(myQuestions.answer);



    //     // console.log('answer a ' + myQuestions[index].answer.a);
    //     // console.log('answer b ' + myQuestions[index].answer.b);
    //     // console.log('answer c ' + myQuestions[index].answer.c);
    //     // console.log('answer d ' + myQuestions[index].answer.d);
    //     // $('label[for=answer]' + (index + 1)).html(myQuestions[index].answer);
    //     // $('label[for=answer2]').html(myQuestions[index].answer.b);
    //     // $('label[for=answer3]').html(myQuestions[index].answer.c);
    //     // $('label[for=answer4]').html(myQuestions[index].answer.d);

    //increment the target attribute , either by name or id incremnet instead of label[for=answer1]






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

}

