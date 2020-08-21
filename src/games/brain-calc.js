import { run, rounds } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const runGame = () => {
  const gameData = [];

  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomInRange(1, 10);
    const num2 = getRandomInRange(1, 10);
    const randomIndex = getRandomInRange(0, operators.length - 1);
    const currentOperator = operators[randomIndex];
    const question = `${num1} ${currentOperator} ${num2}`;
    const answer = calculate(num1, num2, currentOperator);
    gameData.push([question, String(answer)]);
  }
  run(discription, gameData);
};
export default runGame;
