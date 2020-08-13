import { generateRandomNumber } from '../index.js';

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
  const startPoint = generateRandomNumber(1, 50);
  const step = generateRandomNumber(1, 10);
  const answerIndex = generateRandomNumber(0, length - 1);

  const progression = getProgression(length, startPoint, step);
  const answer = String(progression[answerIndex]);
  const question = progression.join(' ').replace(answer, '..');

  return [question, answer];
};

export default generateProgressionPair;
