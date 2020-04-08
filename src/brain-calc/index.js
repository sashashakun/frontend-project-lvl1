import { ask, createGameLauncher } from '../index.js';

const gameLauncher = createGameLauncher(() => {
  const getNumInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const rightOperand = getNumInRange(1, 100);
  const leftOperand = getNumInRange(1, 100);
  const operations = {
    '+': leftOperand + rightOperand,
    '-': leftOperand - rightOperand,
    '*': leftOperand * rightOperand,
  };
  const operationToApply = Object.keys(operations)[getNumInRange(0, 2)];

  const userAnswer = ask(`${leftOperand} ${operationToApply} ${rightOperand}`);
  const correctAnswer = operations[operationToApply];
  const isUserWrong = correctAnswer !== Number(userAnswer);

  return [isUserWrong, userAnswer, correctAnswer];
});

export default gameLauncher;
