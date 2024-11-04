
"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = " 🎉 Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // when guess number is greater
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📈 Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost the game! ";
      document.querySelector(".score").textContent = 0;
    }
    // when guess number is lesser
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = " 📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost the game! ";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".score").textContent = score;
  // document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "grey";
});
