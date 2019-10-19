$(document).ready(function () {
    //creating a timer that starts automatically
    var number;
    var intervalId;

    function run() {
        number = 100;
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
            alert("Time is Up!");
        }
    }
    run();

    //create another on for the submit buton have it end the game set timer to 0 and return results

});
