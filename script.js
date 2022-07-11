'use strict'

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
console.log(secretNumber);
let score = 20;


document.querySelector('.check_btn').addEventListener('click',
    function() {
        let guessNumber = document.querySelector('.guessNumber').value;
        if (!guessNumber) {
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.result').textContent = "Enter any Number";
        } else if (guessNumber != secretNumber) {
            if (score > 1) {
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('.result').textContent = guessNumber < secretNumber ? "Guessed value is lesser than SecretNumber" : "Guessed value is higher than SecretNumber";
            } else {
                document.querySelector('.result').textContent = "You Lost The Game."
                document.querySelector('.score').textContent = 0;
            }

        } else if (guessNumber == secretNumber) {
            document.querySelector('.result').textContent = "YOU WON THE GAME!🏆"
            document.getElementById('content').style.backgroundColor = "#008000"
            document.querySelector('.secretNumber').textContent = secretNumber;
            document.querySelector('.secretNumber').style.width = '4em';
            if (score > highScore) {
                highScore = score;
                document.querySelector('.high_score').textContent = highScore;
            }

        }
    })
document.querySelector('.reset_btn').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.result').textContent = "Enter Any Number";
    document.querySelector('.secretNumber').textContent = '?';
    document.querySelector('.secretNumber').style.width = '2em';
    document.getElementById('content').style.backgroundColor = '#0000ff';
    document.querySelector('.guessNumber').value = '';
})