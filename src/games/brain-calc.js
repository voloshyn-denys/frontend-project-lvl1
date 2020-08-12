import { generateRandomNumber } from '../index.js';

const generateCalcPair = () => {
  const operations = ['+', '-', '*'];

  const firstNumber = generateRandomNumber(1, 20);
  const secondNumber = generateRandomNumber(1, 20);
  const operator = operations[generateRandomNumber(1, operations.length)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  let answer;

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

export default generateCalcPair;
