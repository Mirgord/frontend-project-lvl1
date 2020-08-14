import { runGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('What number is missing in the progression?');

const getProgression = (startNum, progressionStep) => {
  const result = [];
  const end = 10;

  for (let i = 0; i < end; i += 1) {
    const lastNumb = result[result.length - 1];
    if (result.length === 0) {
      result.push(startNum);
    } else result.push(lastNumb + progressionStep);
  }
  return result;
};

const checkProgression = () => {
  const result = [];

  for (let i = 0; i < iteration; i += 1) {
    const num = getRandomInRange(2, 50);
    const index = getRandomInRange(2, 9);
    const progression = getProgression(num, index);
    const hiddenNum = progression.splice(index, 1, '..');
    result.push([progression.join(' '), String(hiddenNum)]);
  }
  runGame(discription, result);
};
export default checkProgression;
