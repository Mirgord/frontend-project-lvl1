import checkResponses from '../index.js';

import getRandomInRange from '../utils.js';

const isNumberPrime = (current) => {
  for (let divider = 2; divider <= current; divider += 1) {
    if (current / divider === 1) {
      return ('yes');
    }
    if (current % divider === 0) {
      return ('no');
    }
  }
  return 1;
};

const сheckPrimeNumbers = () => {
  const discription = ('Answer "yes" if given number is prime. Otherwise answer "no".');
  const rounds = (3);
  const array = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomNum = getRandomInRange(4, 7);
    const result = isNumberPrime(randomNum);
    array.push([randomNum, result]);
  }
  checkResponses(discription, array);
};
export default сheckPrimeNumbers;
