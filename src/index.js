import readlineSync from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
};

export const greetAndGetName = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  return name;
};

export const notifyFail = (userName, userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
};

export const notifySuccess = (userName) => {
  console.log('Correct!');
  console.log(`Congratulations, ${userName}!`);
};

export const ask = (question) => {
  console.log(question);

  return readlineSync.question('Your answer: ');
};

let successInRowAmount = 0;
const successInRowToWin = 3;

const runLoop = (userName, executeGameLogic) => {
  const [isUserWrong, ...answers] = executeGameLogic();

  if (isUserWrong) {
    notifyFail(userName, ...answers);
    return;
  }

  successInRowAmount += 1;
  if (successInRowAmount === successInRowToWin) {
    notifySuccess(userName);
    return;
  }

  runLoop(userName, executeGameLogic);
};

export const createGameLauncher = (executeGameLogic) => () => {
  const name = greetAndGetName();

  runLoop(name, executeGameLogic);
};

export default greet;
