import { runGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const sayEvenOrNot = () => {
  const result = [];

  for (let i = 0; i < iteration; i += 1) {
    const num = getRandomInRange(1, 20);
    const answer = isEven(num) ? 'yes' : 'no';
    result.push([num, answer]);
  }
  runGame(discription, result);
};
export default sayEvenOrNot;
