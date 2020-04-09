import { ask, createGameLauncher } from '../index.js';

const gameLauncher = createGameLauncher(() => {
  const numberToGuess = Math.round(Math.random() * 10);
  const correctAnswer = numberToGuess % 2 ? 'no' : 'yes';

  const userAnswer = ask(
    `Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${numberToGuess}`,
  );

  return [userAnswer, correctAnswer];
});


export default gameLauncher;
