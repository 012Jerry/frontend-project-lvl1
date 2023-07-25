import { getRandomIntInclusive, launchGame } from '../index.js';

let numOne;
let numTwo;
const descriptionGame = 'Find the greatest common divisor of given numbers.';

function questionGame() {
  numOne = getRandomIntInclusive(1, 100);
  numTwo = getRandomIntInclusive(1, 100);
  const result = `${numOne}${' '}${numTwo}`;
  return result;
}

function correctAnswerGame() {
  let lesserNumb;
  let moreNumb;
  if (numOne < numTwo) {
    lesserNumb = numOne;
    moreNumb = numTwo;
  } else {
    lesserNumb = numTwo;
    moreNumb = numOne;
  }
  let commonDivisor = lesserNumb;
  // записать в виде тернарника
  while (lesserNumb % commonDivisor !== 0 || moreNumb % commonDivisor !== 0) {
    commonDivisor -= 1;
  }
  return commonDivisor;
}

export { launchGame, questionGame, correctAnswerGame, descriptionGame };
