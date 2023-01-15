// get values from local storage
// window.localStorage.getItem("UserInitials");
//ccreate and variable retrive objects from local storage
var highScore = window.localStorage.getItem("UserInitials");
console.log(highScore);
var showScore = JSON.parse(highScore);
console.log(showScore);

UserID = document.getElementById("highscores");
// var li = document.createElement("li");
//create a for loop to loop through individual scores
for (var i = 0; i < showScore.length; i++) {
    var li = document.createElement("li");
    UserID.appendChild(li);
    li.textContent = showScore[i].playerInitial + " - " + showScore[i].playerScore;
    // li.textContent = =secondsLeft;
};

//set text content to values from object user initials and score
//user
//append li tags to ol element

//clear data from local storage 
var clearButton = document.getElementById("clear")

clearButton.addEventListener("click", function () {
   window.localStorage.clear();
    });

