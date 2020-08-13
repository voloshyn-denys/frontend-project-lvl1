import readlineSync from 'readline-sync';

const printMessage = (string) => { console.log(string); };

const runEngine = (playerName, pair, score) => {
  const [question, answer] = pair();

  printMessage(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (answer === userAnswer) {
    printMessage('Correct!');

    if (score < 2) {
      runEngine(playerName, pair, score + 1);
    } else {
      printMessage(`Congratulations, ${playerName}!!`);
    }
  } else {
    printMessage(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
    printMessage(`Let's try again, ${playerName}!`);
    runEngine(playerName, pair, 0);
  }
};

const setupPlayer = (condition) => {
  printMessage('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  printMessage(`Hello, ${playerName || 'stranger'}!`);

  if (condition) printMessage(condition);

  return playerName;
};

const startGame = (descriptionMessage, genegatePair) => {
  const playerName = setupPlayer(descriptionMessage);
  runEngine(playerName, genegatePair, 0);
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

export default startGame;
