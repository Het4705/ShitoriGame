// Initializing variables
var timer = 11; // Adjust timer duration as needed
var words = [];
var game = false;
var previous = "";
var score = 0;
var played=1;
var lives = 2;
var timerInterval; // Define timerInterval globally

// Function to display current time and start timer countdown
function displayTime() {
    document.getElementById("message").innerText = "";
    let timeLeft = timer;
    document.getElementById("time-count").innerText = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time-count").innerText = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval); // Stop timer when it reaches 0
            lives -= 1;
            if (lives == 0) {
                document.getElementById("message").innerText = "Game Over!!";
                return;
            } else {
                document.getElementById("message").innerText = "Time Out | Lives Left: " + lives;
            }
        }
    }, 1000);
}

// Function to handle game logic and UI updates
function play() {
    if (lives === 0) {
        alert("Please Restart The Game");
        return;
    }
    if(played%5==0 && timer!=5)
    {
           timer-=2
    }

    // Get input word after checking if timer has started
    var value = document.getElementById("word").value.trim().toLowerCase();

    if (game) {
        // Check if game is ongoing and input word is valid
        if (value.startsWith(previous.slice(-1)) && !words.includes(value)) {
            score += 5;
            previous = value;
            words.push(value);
            played+=1
            clearInterval(timerInterval)
            displayTime();
        } else {
            if (lives == 0) {
                document.getElementById("message").innerText = "Game Over!!";
            } else {
                lives -= 1;
                document.getElementById("message").innerText = "Incorrect Word";
            }
            clearInterval(timerInterval)
        }
    } else { // Start the game
        score += 5;
        previous = value;
        game = true;
        words.push(value);
        displayTime();
    }

    // Start timer only when the game starts
    document.getElementById("score").innerText = "Score: " + score;
    document.getElementById("lives").innerText = "Lives: " + lives;
    document.getElementById("word").value = "";
}

function restart() {
    location.reload();
}
