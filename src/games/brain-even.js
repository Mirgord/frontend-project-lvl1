import checkResponses from '../index.js';

import getRandomInRange from '../utils.js';

const isNumberEven = (current) => {
  if (current % 2 === 0) {
    return ('yes');
  }
  return ('no');
};

const сheckEvenNumbers = () => {
  const discription = ('Answer "yes" if the number is even, otherwise answer "no"');
  const rounds = (3);
  const array = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomNum = getRandomInRange(1, 20);
    const answer = (isNumberEven(randomNum));
    array.push([randomNum, answer]);
  }
  checkResponses(discription, array);
};
export default сheckEvenNumbers;
