import { runGame, iteration } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const checkCalc = () => {
  const operators = ['+', '-', '*'];
  const result = [];

  for (let i = 0; i < iteration; i += 1) {
    const num1 = getRandomInRange(1, 10);
    const num2 = getRandomInRange(1, 10);
    const randomIndex = getRandomInRange(0, 2);
    const currentOperator = operators[randomIndex];
    const question = `${num1} ${currentOperator} ${num2}`;
    const answer = calculate(num1, num2, currentOperator);
    result.push([question, String(answer)]);
  }
  runGame(discription, result);
};
export default checkCalc;
