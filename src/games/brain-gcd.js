import { generateRandomNumber, getGreatCommonDivisor } from '../index.js';

const generateGcdPair = () => {
  const firstNumber = generateRandomNumber(1, 50);
  const secondNumber = generateRandomNumber(1, 50);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGreatCommonDivisor(firstNumber, secondNumber);

  return [question, String(answer)];
};

export default generateGcdPair;
