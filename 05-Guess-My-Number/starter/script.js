'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
//
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let highscore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    let score = document.querySelector('.score').textContent;
    if(document.querySelector('.number').textContent === '?')
    {
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number!';
        } else if (guess === secretNumber && score > 0) {
            highscore = score > highscore ? score : highscore;
            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('.message').textContent = `Correct!`;
            document.querySelector('.number').textContent = String(secretNumber);
        } else if (guess !== secretNumber && score > 0) {
            score--
            document.querySelector('.score').textContent = String(score);
            if (guess > secretNumber) {
                document.querySelector('.message').textContent = 'Too High!';
            } else {
                document.querySelector('.message').textContent = 'Too Low!';
            }
        }
    }

    if (score <= 0) {
        document.querySelector('.message').textContent = 'Game Over!';
    }
});