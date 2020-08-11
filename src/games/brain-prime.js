import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let divider = 2; divider < num; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const sayPrimeOrNot = () => {
  const rounds = 3;
  const array = [];

  for (let i = 0; i < rounds; i += 1) {
    const num = getRandomInRange(4, 7);
    const text = isPrime(num) ? 'yes' : 'no';
    array.push([num, text]);
  }
  startGame(discription, array);
};
export default sayPrimeOrNot;
