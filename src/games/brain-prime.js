import {
  generateRandomNumber,
  isPrime,
  runEngine,
  setupPlayer,
} from '../index.js';

const generatePrimePair = () => {
  const question = generateRandomNumber(200);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [String(question), answer];
};

const game = () => {
  const playerName = setupPlayer('Answer "yes" if given number is prime. Otherwise answer "no".');
  runEngine(playerName, generatePrimePair, 0);
};

export default game;
