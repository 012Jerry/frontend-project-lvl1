import readlineSync from 'readline-sync';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function launchGame(question, correctAnswer, description) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i <= 2; i += 1) {
    console.log(`Question:${question()}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (Number(yourAnswer) === correctAnswer()) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer()}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
export { getRandomIntInclusive, launchGame };
