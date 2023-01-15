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
var correctAnswerAlert = document.getElementById('feedback');
var incorrectAnswerAlert = document.getElementById('feedback1');
var numberOfQuestions = quizQuestions.length;
var Score = document.getElementById('final-score');
var end = document.getElementById("end-screen");
var start = document.getElementById("start-screen");
var timerInterval;



//Start button event listener
// * A start button that when clicked a timer starts and the first question appears.
start.addEventListener("click", function () {
    questionArea.classList.remove("hide");//shows the div containing the questions

    var questionCounter = 0 //To get first question in array
    start.classList.add("hide");
    showQuestion(questionCounter) //To display first question

    timerCount(); //starts the countdown


});

//Answer clicked event listener
clicked.addEventListener("click", function (event) {
    var currentIndex = document.getElementById("questions").getAttribute("index");
    var selectedAns = event.target.innerText //if doesn't work try textContent
    var correctAns = quizQuestions[currentIndex].correctAnswer;
    isClicked = "true";

    if (selectedAns == correctAns) {
        currentIndex++;
        correctAnswerAlert.classList.remove("hide");

        if (currentIndex < numberOfQuestions) {
            setTimeout(function () {
                correctAnswerAlert.classList.add("hide");
                showQuestion(currentIndex);
            }, 400);
        } else {
            setTimeout(function () {
                correctAnswerAlert.classList.add("hide");
                endQuiz(timerInterval);
            }, 400);
        }
    } else {
        incorrectAnswerAlert.classList.remove("hide");
        secondsLeft -= 10;
        currentIndex++;
        if (currentIndex < numberOfQuestions) {
            setTimeout(function () {
                incorrectAnswerAlert.classList.add("hide");
                showQuestion(currentIndex);
            }, 400);
        } else {
            setTimeout(function () {
                incorrectAnswerAlert.classList.add("hide");
                endQuiz();
            }, 400);
        }
    }
});

function endQuiz() {
    questionArea.classList.add("hide");
    end.classList.remove("hide");
    clearInterval(timerInterval);
    //stop timer at end of quiz
}

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

    for (var i = 0; i < quizQuestions.length - 1; i++) {
        var listItem = document.createElement("button");
        listItem.setAttribute("value", i);
        var answerOptions = currentQuestion.answers[i];
        document.getElementById("options").appendChild(listItem);
        listItem.textContent = answerOptions;
        console.log(listItem);
    }
}


//Timer function
function timerCount() {

    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
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


var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");


function renderLastUser() {
    // Fill in code here to retrieve the last email and password.
    // If they are null, return early from this function
    if (initialsInput == null) {
        return;
        alert("error, Initials cannot be blank");
    } else {
        initialsInput.textContent = localStorage.getItem("UserInitials");
    }
    // Else set the text of the userEmailSpan and userPasswordSpan 
    // to the corresponding values form local storage

}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    var playerInitials= document.getElementById("initials").value;
    var userHighscores = JSON.parse(localStorage.getItem("UserInitials")) || [];
    var leaderboard = {
        playerInitial: playerInitials,
        playerScore: secondsLeft,
    }

    if (playerInitials === "") {
        alert("error", "Initials cannot be blank");
    } else {
        alert("success", "Registered successfully");
        userHighscores.push(leaderboard);
        // Save email and password to localStorage and render the last registered.
        localStorage.setItem("UserInitials", JSON.stringify(userHighscores));

        renderLastUser();
        location.href = "highscores.html";
    }
});
