import { runGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('Find the greatest common divisor of given numbers.');

const GCD = (num1, num2) => {
  let devider = num2;

  for (const end = 1; devider >= end; devider -= 1) {
    if (num1 % devider === 0 && num2 % devider === 0) {
      return devider;
    }
  }
  return 1;
};

const checkGCD = () => {
  const result = [];

  for (let i = 0; i < iteration; i += 1) {
    const num1 = getRandomInRange(2, 30);
    const num2 = getRandomInRange(2, 30);
    const question = `${num1} ${num2}`;
    const answer = GCD(num1, num2);
    result.push([question, String(answer)]);
  }
  runGame(discription, result);
};
export default checkGCD;
