import readlineSync from 'readline-sync';

//const readlineSync = require('readline-sync');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i <= 2; i += 1) {
    const num = getRandomIntInclusive(1, 15);
    console.log(`${'Question:'}${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${"'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, "}${name}${'!'}`);
      return;
    }
  }
  console.log(`${'Congratulations '}${name}${'!'}`);
}
export { game };
