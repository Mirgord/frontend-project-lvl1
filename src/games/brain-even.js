import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('Answer "yes" if the number is even, otherwise answer "no"');

const isEven = (num) => ((num % 2 === 0) ? ('yes') : ('no'));

const sayEvenOrNot = () => {
  const rounds = 3;
  const array = [];

  for (let i = 0; i < rounds; i += 1) {
    const num = getRandomInRange(1, 20);
    const text = (isEven(num));
    array.push([num, text]);
  }
  startGame(discription, array);
};
export default sayEvenOrNot;
