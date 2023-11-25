'use strict';

// Initialize variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to display messages in the UI
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Function to reset the game state
const resetGame = function () {
  // Reset score and UI elements
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector(`body`).style.backgroundColor = '#222 ';
  document.querySelector('.number').style.width = `15rem`;
  // Display starting message
  displayMessage('Start guessing..');
  // Reset secret number for a new game
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = ``;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

// Function to check the user's guess
const checkGuess = function () {
  // Get the user's guess from the input
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When no value is entered
  if (!guess) {
    displayMessage(`No value entered ⛔️`);
  } else if (guess === secretNumber) {
    // When guess is correct
    displayMessage(`Correct !`);
    document.querySelector(`body`).style.backgroundColor = '#60b347 ';
    document.querySelector('.number').style.width = `30rem`;
    document.querySelector('.number').textContent = secretNumber;
    // Update highscore if applicable
    if (highscore < score) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else {
    // When guess is wrong
    if (score > 1) {
      // Reduce score, give feedback, and update UI
      displayMessage(guess > secretNumber ? `Too high !` : `Too low !`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // When the player loses the game
      displayMessage(`You Lost😭 !`);
      document.querySelector('.score').textContent = 0;
    }
  }
};

// Event listener for the "Check" button
document.querySelector('.check').addEventListener('click', checkGuess);

// Event listener for the "Again" button
document.querySelector('.again').addEventListener('click', resetGame);
