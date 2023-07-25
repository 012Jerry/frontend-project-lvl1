import { getRandomIntInclusive, launchGame } from '../index.js';

const getDescriptionGame = 'What is the result of the expression?';

let numOne;
let numTwo;
let choiceSign;

function getQuestionGame() {
  choiceSign = getRandomIntInclusive(1, 3);
  numOne = getRandomIntInclusive(1, 10);
  numTwo = getRandomIntInclusive(1, 10);
  let result = '';
  if (choiceSign === 1) {
    result = `${numOne} + ${numTwo}`;
  } else if (choiceSign === 2) {
    result = `${numOne} - ${numTwo}`;
  } else {
    result = `${numOne} * ${numTwo}`;
  }
  return result;
}

function getCorrectAnswerGame() {
  let result = 0;
  if (choiceSign === 1) {
    result = numOne + numTwo;
  } else if (choiceSign === 2) {
    result = numOne - numTwo;
  } else {
    result = numOne * numTwo;
  }
  return (result);
}

export { launchGame, getQuestionGame, getCorrectAnswerGame, getDescriptionGame };
