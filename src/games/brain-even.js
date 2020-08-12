import { generateRandomNumber, runEngine, setupPlayer } from '../index.js';

const generateEvenPair = () => {
  const question = generateRandomNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => {
  const playerName = setupPlayer('Answer "yes" if the number is even, otherwise answer "no".');
  runEngine(playerName, generateEvenPair, 0);
};

export default startGame;
