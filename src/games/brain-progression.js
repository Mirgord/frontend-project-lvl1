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

const runGame = () => {
  const rounds = 3;
  const array = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomStart = getRandomInRange(2, 50);
    const randomIndex = getRandomInRange(2, 9);
    const progression = getProgression([randomStart]);
    const hiddenNumber = progression.splice(randomIndex, 1, '..');
    array.push([progression.join(' '), hiddenNumber.join()]);
  }
  startGame(discription, array);
};
export default runGame;
