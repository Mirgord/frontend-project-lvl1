import startGame from '../index.js';
import getRandomInRange from '../utils.js';

const discription = ('What is the result of the expression?');

const getResponseCalc = (coll) => {
  const [num1, num2, operator] = coll;
  const composition = (`${num1} ${operator} ${num2}`);
  let result = '';
  switch (operator) {
    case '+':
      result = String(num1 + num2);
      break;
    case '-':
      result = String(num1 - num2);
      break;
    default:
      result = String(num1 * num2);
  }
  return ([composition, result]);
};

const checkCalc = () => {
  const operatores = '+-*';
  const rounds = 3;
  const array = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomNum1 = getRandomInRange(1, 10);
    const randomNum2 = getRandomInRange(1, 10);
    const randomIndex = getRandomInRange(0, 2);
    const result = getResponseCalc([randomNum1, randomNum2, operatores[randomIndex]]);
    array.push(result);
  }
  startGame(discription, array);
};
export default checkCalc;
