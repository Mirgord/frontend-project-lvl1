import { startGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('Find the greatest common divisor of given numbers.');

const isMaxDevider = (num1, num2) => {
  let devider = num2;
  for (let finish = 1; devider >= finish; devider -= 1) {
    if (num1 % devider === 0 && num2 % devider === 0) {
      return String(devider);
    }
  }
  return 1;
};

const checkMaxDevider = () => {
  const array = [];

  for (let i = 0; i < iteration; i += 1) {
    const num1 = getRandomInRange(2, 30);
    const num2 = getRandomInRange(2, 30);
    const response = `${num1} ${num2}`;
    const result = isMaxDevider(num1, num2);
    array.push([response, result]);
  }
  startGame(discription, array);
};
export default checkMaxDevider;
