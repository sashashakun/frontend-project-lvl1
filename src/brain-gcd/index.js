import { ask, createGameLauncher } from '../index.js';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const gameLauncher = createGameLauncher(() => {
  const getNumInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const firstNum = getNumInRange(1, 100);
  const secondNum = getNumInRange(1, 100);
  const correctAnswer = gcd(firstNum, secondNum);
  const userAnswer = ask(
    `Find the greatest common divisor of given numbers.\nQuestion: ${firstNum} ${secondNum}`,
  );
  const isUserWrong = correctAnswer !== userAnswer;

  return [isUserWrong, userAnswer, correctAnswer];
});


export default gameLauncher;
