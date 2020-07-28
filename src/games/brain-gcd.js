import readlineSync from 'readline-sync';

import {
  getRandomInRange, welcome, askName, maxDiviser,
}
  from '../index.js';

const maxDevider = (randomNum1, randomNum2) => {
  let NOD = randomNum2;
  while (NOD >= 1) {
    if (randomNum1 % NOD === 0 && randomNum2 % NOD === 0) {
      return String(NOD);
    }
    NOD -= 1;
  }
  return 1;
};

const сheckResponses = () => {
  console.log(welcome);
  console.log(askName);
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  console.log(maxDiviser);
  const rounds = (3);
  for (let i = 0; i < rounds; i += 1) {
    const randomNum1 = getRandomInRange(2, 30);
    const randomNum2 = getRandomInRange(2, 30);
    const userAnswer = readlineSync.question(`Question: ${randomNum1} ${randomNum2}\nYour answer: `);
    if (maxDevider(randomNum1, randomNum2) === userAnswer) {
      console.log('Correct!');
    }
    if (maxDevider(randomNum1, randomNum2) !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${maxDevider(randomNum1, randomNum2)}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default сheckResponses;
