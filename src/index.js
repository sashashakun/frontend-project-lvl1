import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
};

export const ask = (question) => {
  console.log(question);

  return readlineSync.question('Your answer: ');
};

export const getNumInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

let successInRowAmount = 0;
const successInRowToWin = 3;

const runLoop = (userName, executeGameLogic) => {
  const [userAnswer, correctAnswer] = executeGameLogic();

  if (String(userAnswer) !== String(correctAnswer)) {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }

  successInRowAmount += 1;
  if (successInRowAmount === successInRowToWin) {
    console.log('Correct!');
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  runLoop(userName, executeGameLogic);
};

export const createGameLauncher = (executeGameLogic) => () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  runLoop(name, executeGameLogic);
};

export default greet;
