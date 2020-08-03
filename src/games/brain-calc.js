import checkResponses from '../index.js';

import getRandomInRange from '../utils.js';

const checkCalc = () => {
  const discription = ('What is the result of the expression?');
  const rounds = (3);
  const operatores = ('+-*');
  const array = [];
  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomInRange(1, 10);
    const num2 = getRandomInRange(1, 10);
    const randomIndex = getRandomInRange(0, 2);
    const composition = `${num1} ${operatores[randomIndex]} ${num2}`;
    let result = '';
    switch (operatores[randomIndex]) {
      case '+':
        result = String(num1 + num2);
        break;
      case '-':
        result = String(num1 - num2);
        break;
      default:
        result = String(num1 * num2);
    }
    array.push([composition, result]);
  }
  checkResponses(discription, array);
};
export default checkCalc;
