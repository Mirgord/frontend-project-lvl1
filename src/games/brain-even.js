import { runEngine, rounds } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = ((num) => num % 2 === 0);

const runGame = () => {
  const question = [];

  for (let i = 0; i < rounds; i += 1) {
    const randomNum = getRandomInRange(1, 20);
    const answer = isEven(randomNum) ? 'yes' : 'no';
    question.push([randomNum, answer]);
  }
  runEngine(discription, question);
};
export default runGame;
