import { run, rounds } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let divider = 2; divider < num; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const runGame = () => {
  const question = [];

  for (let i = 0; i < rounds; i += 1) {
    const randomNum = getRandomInRange(4, 7);
    const answer = isPrime(randomNum) ? 'yes' : 'no';
    question.push([randomNum, answer]);
  }
  run(discription, question);
};
export default runGame;
