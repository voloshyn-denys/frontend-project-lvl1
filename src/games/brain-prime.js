import {
  runEngine,
  setupPlayer,
} from '../index.js';

const generatePrimePair = () => {
  return ['1', '2'];
};

const game = () => {
  const playerName = setupPlayer('Answer "yes" if given number is prime. Otherwise answer "no".');
  runEngine(playerName, generatePrimePair, 0);
};

export default game;
