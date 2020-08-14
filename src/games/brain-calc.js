import { runGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('What is the result of the expression?');

const calculate = ([num1, num2, operator]) => {
  switch (operator) {
    case '+':
      return (num1 + num2);
    case '-':
      return (num1 - num2);
    default:
      return (num1 * num2);
  }
};

const checkCalc = () => {
  const operatores = ['+', '-', '*'];
  const result = [];

  for (let i = 0; i < iteration; i += 1) {
    const num1 = getRandomInRange(1, 10);
    const num2 = getRandomInRange(1, 10);
    const index = getRandomInRange(0, 2);
    const question = `${num1} ${operatores[index]} ${num2}`;
    const composition = calculate([num1, num2, operatores[index]]);
    result.push([question, String(composition)]);
  }
  runGame(discription, result);
};
export default checkCalc;
