import readlineSync from 'readline-sync';

import {
  getRandomInRange, welcome, askName, askExpression,
}
  from '../index.js';

//  brain-calc
const checkCalc = () => {
  console.log(welcome);
  console.log(askName);
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  console.log(askExpression);
  const rounds = (3);
  const operatores = ('+-*');
  for (let i = 0; i < rounds; i += 1) {
    const current = operatores[i];
    const num1 = getRandomInRange(1, 10);
    const num2 = getRandomInRange(1, 10);
    let result = 0;
    switch (current) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      default:
        result = num1 * num2;
    }
    const userAnswer = readlineSync.question(`Question:${num1} ${current} ${num2}\nYour answer: `);
    if (String(result) === userAnswer) {
      console.log('Correct!');
    }
    if (String(result) !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default checkCalc;
