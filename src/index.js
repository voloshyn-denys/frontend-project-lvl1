import readlineSync from 'readline-sync';

export const runEngine = (playerName, pair, score) => {
  const [question, answer] = pair();

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (answer === userAnswer) {
    console.log('Correct!');

    if (score < 2) {
      runEngine(playerName, pair, score + 1);
    } else {
      console.log(`Congratulations, ${playerName}!!`);
    }
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    console.log(`Let's try again, ${playerName}!`);
    runEngine(playerName, pair, 0);
  }
};

export const setupPlayer = (condition) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName || 'stranger'}!`);

  if (condition) console.log(condition);

  return playerName;
};

const initGame = () => {
  const playerName = setupPlayer();
  runEngine(playerName, 0, []);
};

export const generateRandomNumber = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getGreatCommonDivisor = (firstNumber, secondNumber) => {
  let max = Math.max(firstNumber, secondNumber);
  let min = Math.min(firstNumber, secondNumber);

  if (max % min === 0) return min;

  let divisor = null;
  while (max % min !== 0) {
    divisor = max % min;
    max = min;
    min = divisor;
  }

  return divisor;
};

export default initGame;
