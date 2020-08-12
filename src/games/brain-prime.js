import { generateRandomNumber } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

const generatePrimePair = () => {
  const question = generateRandomNumber(1, 200);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [String(question), answer];
};

export default generatePrimePair;
