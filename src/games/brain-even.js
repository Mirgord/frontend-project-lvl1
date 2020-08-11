import { startGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('Answer "yes" if the number is even, otherwise answer "no"');

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const sayEvenOrNot = () => {
  const array = [];

  for (let i = 0; i < iteration; i += 1) {
    const num = getRandomInRange(1, 20);
    const text = (isEven(num));
    array.push([num, text]);
  }
  startGame(discription, array);
};
export default sayEvenOrNot;
