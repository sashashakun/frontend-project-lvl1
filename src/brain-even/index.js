import readlineSync from 'readline-sync';
import { greetAndGetName } from '../index.js';

let successInRowAmount = 0;
const successInRowToWin = 3;
const YES_ANSWER = 'yes';
const NO_ANSWER = 'no';
const possibleAnswers = { [YES_ANSWER]: true, [NO_ANSWER]: false };

const notifyFail = (userName, userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${userName}!`);
};

const notifySuccess = (userName) => {
  console.log('Correct!');
  console.log(`Congratulations, ${userName}!`);
};

const runMainLoop = (userName) => {
  const numberToGuess = Math.round(Math.random() * 10);
  console.log(`Question: ${numberToGuess}`);

  const isEvenNumber = !(numberToGuess % 2);
  const userAnswer = readlineSync.question('Your answer: ');

  const isAnswerExist = Object.keys(possibleAnswers).includes(userAnswer);
  const isEvenUserAnswer = userAnswer === YES_ANSWER;
  const isUserWrong = isEvenNumber !== isEvenUserAnswer;

  if (isUserWrong || !isAnswerExist) {
    const correctAnswer = Object.keys(possibleAnswers).find((answer) => possibleAnswers[answer] === isEvenNumber);
    notifyFail(userName, userAnswer, correctAnswer);
    return;
  }

  successInRowAmount += 1;
  if (successInRowAmount === successInRowToWin) {
    notifySuccess(userName);
    return;
  }

  runMainLoop(userName);
};

const runBrainEvenGame = () => {
  const name = greetAndGetName();
  runMainLoop(name);
};

export default runBrainEvenGame;
