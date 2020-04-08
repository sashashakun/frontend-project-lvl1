import { ask, createGameLauncher } from '../index.js';

const gameLauncher = createGameLauncher(() => {
  const numberToGuess = Math.round(Math.random() * 10);

  const userAnswer = ask(numberToGuess);
  const correctAnswer = numberToGuess % 2 ? 'no' : 'yes';
  const isUserWrong = correctAnswer !== userAnswer;

  return [isUserWrong, userAnswer, correctAnswer];
});


export default gameLauncher;
