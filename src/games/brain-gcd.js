import readlineSync from 'readline-sync';

import {
  getRandomInRange, welcome, askName, maxDivider,
}
  from '../index.js';

const isMaxDevider = (randomNum1, randomNum2) => {
  let devider = randomNum2;
  for (let finish = 1; devider >= finish; devider -= 1) {
    if (randomNum1 % devider === 0 && randomNum2 % devider === 0) {
      return String(devider);
    }
  }
  return 1;
};

const сheckResponses = () => {
  console.log(welcome);
  console.log(askName);
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  console.log(maxDivider);
  const rounds = (3);
  for (let i = 0; i < rounds; i += 1) {
    const randomNum1 = getRandomInRange(2, 30);
    const randomNum2 = getRandomInRange(2, 30);
    const userAnswer = readlineSync.question(`Question: ${randomNum1} ${randomNum2}\nYour answer: `);
    if (isMaxDevider(randomNum1, randomNum2) === userAnswer) {
      console.log('Correct!');
    }
    if (isMaxDevider(randomNum1, randomNum2) !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isMaxDevider(randomNum1, randomNum2)}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default сheckResponses;
