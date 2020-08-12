import { generateRandomNumber } from '../index.js';

const generateEvenPair = () => {
  const question = generateRandomNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

export default generateEvenPair;
