import { ask, getNumInRange, createGameLauncher } from '../../index.js';

const gcd = (a, b) => (b ? gcd(b, a % b) : a);

const gameLauncher = createGameLauncher(() => {
  const firstNum = getNumInRange(1, 100);
  const secondNum = getNumInRange(1, 100);
  const correctAnswer = gcd(firstNum, secondNum);

  const userAnswer = ask(
    `Find the greatest common divisor of given numbers.\nQuestion: ${firstNum} ${secondNum}`,
  );

  return [userAnswer, correctAnswer];
});


export default gameLauncher;
