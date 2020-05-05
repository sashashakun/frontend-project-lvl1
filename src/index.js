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

const runLoop = (userName, game) => {
  const { getCorrectAnswer, playerQuestion } = game;

  const correctAnswer = getCorrectAnswer();
  const userAnswer = ask(playerQuestion);

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

  runLoop(userName, game);
};

export const createGameLauncher = (game) => () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  runLoop(name, game);
};

export default greet;
