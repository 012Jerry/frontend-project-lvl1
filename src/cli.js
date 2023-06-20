import readlineSync from 'readline-sync';

function name() {
  console.log('Welcome to the Brain Games!');
  let result = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${result}!`);
}
export {name};
