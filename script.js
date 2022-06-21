"use strict";

// Program will choose a random number 1-20 (no decimals)
// Score will start at 20
// Highscore will start at 0

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Messages for CORRECT, HIGH & LOW numbers will be diplayed

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// When player enters a number and clicks "check", program will compare that number to secret numnber

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // If player enters NO number in box and clicks "check", message will be displayed

  if (!guess) {
    displayMessage("⛔️ No Number!");

    // If player enters CORRECT number in the box, message will be displayed, secret number will be revealed in widened number box and screen will turn green
    // Also, new highscore will be displayed and update after every game with the higher score
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // If player enters WRONG number, high and low messages will be displayed, score will decrease (if greater than 1) by 1 and be displayed
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "👇 Too high!" : "👆 Too low!");
      score--;
      document.querySelector(".score").textContent = score;

      // If player loses the game, message will be displayed, score will be 0, "X" will appear in number box and background color turns red
    } else {
      displayMessage("💥 You Lost the Game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = "X";
      document.querySelector("body").style.backgroundColor = "#D22B2B";
    }
  }
});

// If player wants to play again, they click "Play Again" and game will be reset

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
