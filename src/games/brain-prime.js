import { runGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let divider = 2; divider < num; divider += 1) {
    if (num % divider === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const sayPrimeOrNot = () => {
  const result = [];

  for (let i = 0; i < iteration; i += 1) {
    const num = getRandomInRange(4, 7);
    const answer = isPrime(num);
    result.push([num, answer]);
  }
  runGame(discription, result);
};
export default sayPrimeOrNot;
