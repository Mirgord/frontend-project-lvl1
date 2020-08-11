import { startGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('What number is missing in the progression?');

const getProgression = (coll) => {
  const array = [...coll];
  const end = 10;
  for (let i = 0; i < end; i += 1) {
    const lastNumb = array[array.length - 1];
    array.push(lastNumb + 2);
  }
  return array;
};

const checkProgression = () => {
  const array = [];

  for (let i = 0; i < iteration; i += 1) {
    const startNum = getRandomInRange(2, 50);
    const index = getRandomInRange(2, 9);
    const progression = getProgression([startNum]);
    const hiddenNum = progression.splice(index, 1, '..');
    array.push([progression.join(' '), hiddenNum.join()]);
  }
  startGame(discription, array);
};
export default checkProgression;
