import { ask, getNumInRange, createGameLauncher } from '../index.js';

const gameLauncher = createGameLauncher(() => {
  const rightOperand = getNumInRange(1, 100);
  const leftOperand = getNumInRange(1, 100);
  const operations = {
    '+': leftOperand + rightOperand,
    '-': leftOperand - rightOperand,
    '*': leftOperand * rightOperand,
  };
  const operationToApply = Object.keys(operations)[getNumInRange(0, operations.length - 1)];
  const correctAnswer = operations[operationToApply];

  const userAnswer = ask(
    `What is the result of the expression?\nQuestion: ${leftOperand} ${operationToApply} ${rightOperand}`,
  );

  return [userAnswer, correctAnswer];
});

export default gameLauncher;
