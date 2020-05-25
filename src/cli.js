import readlineSync from 'readline-sync';

const generateRandomNumber = (max) => Math.floor(Math.random() * Number(max));

const askQuestion = (userName, score) => {
  const questionNumber = generateRandomNumber(50);
  const currentAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${questionNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (currentAnswer === userAnswer) {
    console.log('Correct!');

    if (score < 2) {
      askQuestion(userName, score + 1);
    } else {
      console.log(`Congratulations, ${userName}!!`);
    }
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${currentAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    askQuestion(userName, 0);
  }
};

const initGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName || 'stranger'}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  askQuestion(userName, 0);
};


export default initGame;
