import {
  generateRandomNumber,
  getProgression,
  runEngine,
  setupPlayer,
} from '../index.js';

const generateProgressionPair = () => {
  const length = 10;
  const startPoint = generateRandomNumber(50);
  const step = generateRandomNumber(10);
  const answerIndex = generateRandomNumber(10);

  const progression = getProgression(length, startPoint, step);
  const answer = String(progression[answerIndex]);
  const question = progression.join(' ').replace(answer, '..');

  return [question, answer];
};

const game = () => {
  const playerName = setupPlayer('What number is missing in the progression?');
  runEngine(playerName, generateProgressionPair, 0);
};

export default game;
