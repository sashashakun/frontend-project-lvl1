import { ask, createGameLauncher, getNumInRange } from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
};

const gameLauncher = createGameLauncher(() => {
  // stolen from wikipedia
  const fiveHundredthPrimeNumber = 3571;
  const numberToGuess = getNumInRange(1, fiveHundredthPrimeNumber);
  const correctAnswer = isPrime(numberToGuess) ? 'yes' : 'no';

  const userAnswer = ask(
    `Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${numberToGuess}`,
  );

  return [userAnswer, correctAnswer];
});


export default gameLauncher;
