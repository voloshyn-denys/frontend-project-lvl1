import { runEngine, setupPlayer } from '../index.js';

const generateCalcPair = () => [0, 0];

const game = () => {
  const playerName = setupPlayer('What is the result of the expression?');
  runEngine(playerName, generateCalcPair, 0);
};

export default game;
