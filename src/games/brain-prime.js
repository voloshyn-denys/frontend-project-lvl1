import {
  generateRandomNumber,
  runEngine,
  setupPlayer,
} from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

const generatePrimePair = () => {
  const question = generateRandomNumber(200);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [String(question), answer];
};

const startGame = () => {
  const playerName = setupPlayer('Answer "yes" if given number is prime. Otherwise answer "no".');
  runEngine(playerName, generatePrimePair, 0);
};

export default startGame;
