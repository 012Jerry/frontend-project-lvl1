import { getRandomIntInclusive, launchGame } from '../index.js';

let numOne;
let numTwo;
const getDescriptionGame = 'Find the greatest common divisor of given numbers.';

function getQuestionGame() {
  numOne = getRandomIntInclusive(1, 100);
  numTwo = getRandomIntInclusive(1, 100);
  const result = `${numOne}${' '}${numTwo}`;
  return result;
}

function getCorrectAnswerGame() {
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

export { launchGame, getQuestionGame, getCorrectAnswerGame, getDescriptionGame };
