import checkResponses from '../index.js';

import getRandomInRange from '../utils.js';

const getProgression = (numb) => {
  const array = [];
  array[0] = numb;
  const finish = (10);
  for (let i = 0; i < finish; i += 1) {
    const lastNumb = array[array.length - 1];
    array.push(lastNumb + 2);
  }
  return array;
};

const checkProgression = () => {
  const discription = ('What number is missing in the progression?');
  const rounds = (3);
  const array = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomStart = getRandomInRange(2, 50);
    const randomIndex = getRandomInRange(2, 9);
    const progression = getProgression(randomStart);
    const hiddenNumber = progression.splice(randomIndex, 1, '..');
    array.push([progression.join(' '), hiddenNumber.join()]);
  }
  checkResponses(discription, array);
};
export default checkProgression;
