'use strict';
// The making of that mystery number
//We use math.random() to get a random number between *0 and 1*
//math.trunc is used to unapply the decimal part of our random number, without it, it'll choose numbers with decimals
// Because we selected it to be under 20, it'll never be 20, so we add 1 at the end, to make sure we'll have a number over 0 and under 20 including 20!
document.querySelector('.between').textContent = 'Between 1 and 20';
let secretNum = Math.trunc(Math.random() * 20) + 1;
let scorePoint = 20;
let highscore = 0;
document.querySelector('.score').textContent = scorePoint;
document.querySelector('.highscore').textContent = highscore;
// document.querySelector('.message').textContent = '👌 You got it!';
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (scorePoint > 1) {
    if (guess == secretNum) {
      if (scorePoint > highscore) {
        document.querySelector('.message').textContent =
          'You got the number!🎉';
        document.querySelector('.header-1').textContent = 'You won the game!';
        document.querySelector('.number').textContent = secretNum;
        highscore = scorePoint;
        document.querySelector('body').style.backgroundColor = '#32CD32';
        document.querySelector('.message').style.width = '25rem';
        document.querySelector('.highscore').textContent = highscore;
      } else {
        document.querySelector('.message').textContent =
          'You got the number!🎉';
        document.querySelector('.number').textContent = secretNum;
        document.querySelector('body').style.backgroundColor = '#00FF00';
        document.querySelector('.message').style.width = '25rem';
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (!guess) {
      document.querySelector('.message').textContent = 'No Number!🔴';
      scorePoint--;
      document.querySelector('.score').textContent = scorePoint;
    } else {
      if (guess > secretNum) {
        scorePoint--;
        document.querySelector('.message').textContent = "It's too high!";
        document.querySelector('.score').textContent = scorePoint;
      } else {
        scorePoint--;
        document.querySelector('.message').textContent = "It's too low!";
        document.querySelector('.score').textContent = scorePoint;
      }
    }
  } else {
    document.querySelector('.message').textContent = 'You lost the game 😐';
    document.querySelector('.message').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#E82900';
    document.querySelector('.number').textContent = secretNum;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  scorePoint = 20;
  console.log('clicked "Again"');
  document.querySelector('.header-1').textContent = 'Guess The Number!';
  document.querySelector('.message').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = scorePoint;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
