"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//this score is part of the so-called application state which is
//basically all the data that is relevant to the application
let score = 20;
let highScore = 0;

//display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//display number
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

//display score
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

//change css style by Dom
const changeBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

//change css style by Dom
const changeWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔️No number!");

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    displayNumber(secretNumber);
    //change background color (inline style)
    changeBackground("#60b347");
    // change width (inline style)
    changeWidth("30rem");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // when guess is wrong.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  changeBackground("#222");
  changeWidth("15rem");
});
