'use strict'

let secretNumber = Math.trunc(Math.random() * 20 + 1);
//document.querySelector('.secretNumber').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check_btn').addEventListener('click',
    function() {
        let guessNumber = document.querySelector('.guessNumber').value;
        if (!guessNumber) {
            document.querySelector('.result').textContent = "Enter any Number";
        } else if (guessNumber > secretNumber) {
            document.querySelector('.result').textContent = "Guessed value is higher than SecretNumber";
        } else if (guessNumber < secretNumber) {
            document.querySelector('.result').textContent = "Guessed value is lesser than SecretNumber";
        } else if (guessNumber == secretNumber) {
            document.querySelector('.result').textContent = "YOU WON THE GAME!🏆"
        }



    })