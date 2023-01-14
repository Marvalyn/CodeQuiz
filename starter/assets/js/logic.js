// ASSIGNMENT
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// ## Acceptance Criteria

// Create a code quiz that contains the following requirements:

//Global variables
var timerEl = document.getElementById('time');
var start = document.getElementById("start");
var secondsLeft = 90;
var score = 0;
var questionArea = document.getElementById("questions");
var clicked = document.getElementById("options");
var isClicked = " ";



//Start button event listener
// * A start button that when clicked a timer starts and the first question appears.
start.addEventListener("click", function(){
    questionArea.classList.remove("hide");//shows the div containing the questions

    var questionCounter = 0 //To get first question in array

    showQuestion(questionCounter) //To display first question

    timerCount(); //starts the countdown
    
   
});

//Populate questions

function showQuestion(q) {

    isClicked = "false";
    questions.setAttribute("index", q);

    // //select the DOM element

    var quesTitle = document.getElementById("question-title");

    // //modify it

    quesTitle.textContent = quizQuestions[q].question;
    var currentQuestion = quizQuestions[q];

    //remove previously appended li items

    var option = document.getElementById("options");
    while (option.hasChildNodes()) {
        option.removeChild(option.firstChild);
    }

    //loop to display questions
    //refer to append lesson to add answer text

    for (var i = 0; i < quizQuestions.length; i++) {
        var listItem = document.createElement("li");
        var answerOptions = currentQuestion.answers[i];
        document.getElementById("options").appendChild(listItem);
    }
}
// start.addEventListener("click", function(event) {
//     var element = event.target;

//     if (element.matches(".hide")) {
//         var state = element.getAttribute()
//     }
// })


//Timer function
function timerCount() {
    
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


// function showQuestion(q) {



// //select by query
// let choices = document.querySelectorAll(".choice")
// console.log(choices);

// choices.forEach(function(element, index){
//     element.textContent = q.answers[index];
// });
// }

// showQuestion(quizQuestions);

// showQuestion();
//var answerOptions = document.getElementById("choices");

