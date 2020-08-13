import readlineSync from 'readline-sync';

const printMessage = (string) => { console.log(string); };

const greetPlayer = (condition) => {
  printMessage('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  printMessage(`Hello, ${playerName || 'stranger'}!`);

  if (condition) printMessage(condition);

  return playerName;
};

const startGame = (condition, generatePair) => {
  let score = 0;
  const playerName = greetPlayer(condition);

  while (score !== 3) {
    const [question, answer] = generatePair();
    printMessage(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      score += 1;

      printMessage('Correct!');
    } else {
      score = 0;

      printMessage(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      printMessage(`Let's try again, ${playerName}!`);
    }
  }

  printMessage(`Congratulations, ${playerName}!!`);
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
