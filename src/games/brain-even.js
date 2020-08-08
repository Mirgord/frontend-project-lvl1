import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('Answer "yes" if the number is even, otherwise answer "no"');

const isEven = (num) => {
  if (num % 2 === 0) {
    return ('yes');
  }
  return ('no');
};

const runGame = () => {
  const rounds = 3;
  const array = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomNum = getRandomInRange(1, 20);
    const result = (isEven(randomNum));
    array.push([randomNum, result]);
  }
  startGame(discription, array);
};
export default runGame;
