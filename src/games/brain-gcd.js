import {
  generateRandomNumber,
  getGreatCommonDivisor,
  runEngine,
  setupPlayer,
} from '../index.js';

const generateGcdPair = () => {
  const firstNumber = generateRandomNumber(50);
  const secondNumber = generateRandomNumber(50);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGreatCommonDivisor(firstNumber, secondNumber);

  return [question, String(answer)];
};

const game = () => {
  const playerName = setupPlayer('Find the greatest common divisor of given numbers.');
  runEngine(playerName, generateGcdPair, 0);
};

export default game;
