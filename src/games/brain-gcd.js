import { runEngine, rounds } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => (x ? gcd(y % x, x) : y);

const runGame = () => {
  const gameData = [];

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomInRange(2, 30);
    const num2 = getRandomInRange(2, 30);
    const question = `${num1} ${num2}`;
    const answer = gcd(num1, num2);
    gameData.push([question, String(answer)]);
  }
  runEngine(discription, gameData);
};
export default runGame;
