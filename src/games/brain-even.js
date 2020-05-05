import { ask, createGameLauncher, getNumInRange } from '../index.js';

const gameLauncher = createGameLauncher({
  const getCorrectAnswer = () => {
    const numberToGuess = getNumInRange(1, 10);
    const correctAnswer = numberToGuess % 2 ? 'no' : 'yes';

    return correctAnswer;
  }

  const question = `Answer "yes" if the number is even, otherwise answer "no".\nQuestion: ${numberToGuess}`;

  return { getCorrectAnswer, playerQuestion };
});


export default gameLauncher;
