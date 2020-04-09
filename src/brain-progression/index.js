import { ask, getNumInRange, createGameLauncher } from '../index.js';

const getArithmeticSequence = (initialValue, increment, sequenceSize) => Array.from(
  Array(sequenceSize).keys(),
).map((index) => initialValue + index * increment);

const gameLauncher = createGameLauncher(() => {
  const initial = getNumInRange(1, 5);
  const increment = getNumInRange(2, 10);
  const indexToChange = getNumInRange(0, 9);
  const sequence = getArithmeticSequence(initial, increment, 10);
  const progressionSequenceToAsk = [
    sequence.slice(0, indexToChange).join(' '),
    '..',
    sequence.slice(indexToChange + 1).join(' '),
  ].join(' ');
  const correctAnswer = sequence[indexToChange];

  const userAnswer = Number(ask(
    `What number is missing in the progression?\nQuestion: ${progressionSequenceToAsk}`,
  ));

  return [userAnswer, correctAnswer];
});


export default gameLauncher;
