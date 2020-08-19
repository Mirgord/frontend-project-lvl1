import { runGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = 'What number is missing in the progression?';

const getProgression = (startValue, progressionStep) => {
  const result = [];
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    const current = i;
    result.push(startValue + current * progressionStep);
  }
  return result;
};

const checkProgression = () => {
  const result = [];

  for (let i = 0; i < iteration; i += 1) {
    const startValue = getRandomInRange(2, 20);
    const progressionStep = getRandomInRange(2, 9);
    const progression = getProgression(startValue, progressionStep);
    const hiddenNum = progression.splice(progressionStep, 1, '..');
    result.push([progression.join(' '), String(hiddenNum)]);
  }
  runGame(discription, result);
};
export default checkProgression;
