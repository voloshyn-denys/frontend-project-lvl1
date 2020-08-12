import {
  generateRandomNumber,
  runEngine,
  setupPlayer,
} from '../index.js';

const getProgression = (length, startPoint, step) => {
  const result = [];

  let number = startPoint;

  for (let i = 0; i < length; i += 1) {
    result.push(number);
    number += step;
  }

  return result;
};

const generateProgressionPair = () => {
  const length = 10;
  const startPoint = generateRandomNumber(50);
  const step = generateRandomNumber(10);
  const answerIndex = generateRandomNumber(length);

  const progression = getProgression(length, startPoint, step);
  const answer = String(progression[answerIndex]);
  const question = progression.join(' ').replace(answer, '..');

  return [question, answer];
};

const startGame = () => {
  const playerName = setupPlayer('What number is missing in the progression?');
  runEngine(playerName, generateProgressionPair, 0);
};

export default startGame;
