import readlineSync from 'readline-sync';

export const generateRandomNumber = (max) => Math.floor(Math.random() * Number(max));

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


export default initGame;
