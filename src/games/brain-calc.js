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
    const num1 = getRandomInRange(1, 10);
    const num2 = getRandomInRange(1, 10);
    const index = getRandomInRange(0, 2);
    const composition = getResponseCalc([num1, num2, operatores[index]]);
    array.push(composition);
  }
  startGame(discription, array);
};
export default checkCalc;
