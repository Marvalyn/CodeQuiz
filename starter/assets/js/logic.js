// ## User Story

// ```
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// ```

// ## Acceptance Criteria

// Create a code quiz that contains the following requirements:

// * A start button that when clicked a timer starts and the first question appears.
// add timer
// add event listener for timer function
// call function 
//reference colour splosion timers & intervals

var timerEl = document.getElementById('time');
var start = document.getElementById("start");

start.addEventListener("click", function(){
    timerCount();

});
function timerCount() {
    var secondsLeft = 90;
    var timerInterval = setInterval(function() {
        secondsLeft --;
        timerEl.textContent = secondsLeft;

        if(secondsLeft === 0) {
            //stop execution of action
            clearInterval(timerInterval);
        }
    }, 900);
}


//   * Questions contain buttons for each answer.
//   * 
//   * When answer is clicked, the next question appears
//will need an event listener button "click"
//   * 
//   * If the answer clicked was incorrect then subtract time from the clock
// will need an if loop
// * The quiz should end when all questions are answered or the timer reaches 0.

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score
//client side storage will need get event and set event
//will need a prevent default declaration

//when i click the start buttin move to the next question 
// var score = 0;

// for (var i = 0; i < quizQuestions.length; i++) {
//     alert(quizQuestions[i].question);
// }

// function showQuestion(q) {
//     //select DOM element to modify 
//     var titleQuestion = document.getElementById("question-title");


//     //modify it

//     titleQuestion.textContent = q.questions;

//     //select by a query
//     //create li items
//     var answerOptions = document.querySelectorAll(".choices");
//     // console.log(answerOptions);

//     // run for reach option
//     answerOptions.forEach(function(element,index){
//         element.textContent = q.answerOptions[index];

//         element.addEventListener("click", function(){
//             if(q.correctAnswer == index)
//             score ++;
//             // move to next question
//         }
//             else {
//                 //reduce time 10 seconds
//                 score --;
//             }
//         })
//     });


// };

// showQuestion();
//var answerOptions = document.getElementById("choices");

