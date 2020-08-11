import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('What number is missing in the progression?');

const getProgression = (coll) => {
  const result = [...coll];
  const finish = 10;
  for (let i = 0; i < finish; i += 1) {
    const lastNumb = result[result.length - 1];
    result.push(lastNumb + 2);
  }
  return result;
};

const checkProgression = () => {
  const rounds = 3;
  const array = [];

  for (let i = 0; i < rounds; i += 1) {
    const startNum = getRandomInRange(2, 50);
    const index = getRandomInRange(2, 9);
    const progression = getProgression([startNum]);
    const hiddenNum = progression.splice(index, 1, '..');
    array.push([progression.join(' '), hiddenNum.join()]);
  }
  startGame(discription, array);
};
export default checkProgression;
