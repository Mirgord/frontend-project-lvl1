import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  for (let divider = 2; divider <= num; divider += 1) {
    if (num / divider === 1) {
      return ('yes');
    }
    if (num % divider === 0) {
      return ('no');
    }
  }
  return 1;
};

const runGame = () => {
  const rounds = 3;
  const array = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomNum = getRandomInRange(4, 7);
    const result = isPrime(randomNum);
    array.push([randomNum, result]);
  }
  startGame(discription, array);
};
export default runGame;
