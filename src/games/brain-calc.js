import { generateRandomNumber, runEngine, setupPlayer } from '../index.js';

const generateCalcPair = () => {
  const operations = ['+', '-', '*'];

  const firstNumber = generateRandomNumber(20);
  const secondNumber = generateRandomNumber(20);
  const operator = operations[generateRandomNumber(3)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  let answer = null;

  switch (operator) {
    case '+':
      answer = firstNumber + secondNumber;
      break;

    case '-':
      answer = firstNumber - secondNumber;
      break;

    default:
      answer = firstNumber * secondNumber;
      break;
  }
  // or const answer = eval(question);

  return [question, String(answer)];
};

const game = () => {
  const playerName = setupPlayer('What is the result of the expression?');
  runEngine(playerName, generateCalcPair, 0);
};

export default game;
