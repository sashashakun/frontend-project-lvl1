import { ask, createGameLauncher, getNumInRange } from '../../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const gameLauncher = createGameLauncher(() => {
  const numberToGuess = getNumInRange(1, 3571);
  const correctAnswer = isPrime(numberToGuess) ? 'yes' : 'no';

  const userAnswer = ask(
    `Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${numberToGuess}`,
  );

  return [userAnswer, correctAnswer];
});


export default gameLauncher;
