// Initializing variables
var words = [];
var game = false;
var previous = "";
var score = 0;
var lives = 2;

function play() {
    // Getting the input word value
    var value = document.getElementById("word").value.trim().toLowerCase();
    
    if (game) {
        // Checking if the game is ongoing
        if (previous !== "" && value.startsWith(previous.slice(-1)) && !words.includes(value)) {
            // Updating score and previous word
            score += 5;
            previous = value;
            words.push(value); // Adding the word to used words
        } else {
            // End the game
            endGame();
        }
    } else if (!game && previous === "") {
        // Start the game
        score += 5;
        previous = value;
        game = true;
        words.push(value); // Add the word to used words
    } else {
        // End the game
        endGame();
    }
    
    // Update UI with score and lives
    document.getElementById("score").innerText = "Scores:"+ score;
    document.getElementById("lives").innerText = "Lives:" + lives;
}

function endGame() {
    // End the game
    game = false;
    lives--; // Decrease remaining lives
    if (lives <= 0) {
        // If no lives left, display game over message
        document.getElementById("message").innerText = "Game Over! Please Restart.";
    } else {
        // Otherwise, prompt user for new game
        document.getElementById("message").innerText = "Incorrect word! Try again.";
    }
}

function restart() {
    // Reload the page to restart the game
    location.reload();
}
