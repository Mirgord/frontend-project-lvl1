import readlineSync from 'readline-sync';

import {
  welcome, askName, evenNumber, getRandomInRange,
}
  from '../index.js';

const isNumberEven = (current) => {
  if (current % 2 === 0) {
    return ('yes');
  }
  return ('no');
};

const сheckResponses = () => {
  console.log(welcome);
  console.log(askName);
  const printName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${printName}!`);
  console.log(evenNumber);
  const rounds = (3);
  for (let i = 0; i < rounds; i += 1) {
    const randomNum = getRandomInRange(1, 20);
    const userAnswer = readlineSync.question(`Question: ${randomNum}\nYour answer: `);
    if (isNumberEven(randomNum) === userAnswer) {
      console.log('Correct!');
    }
    if (isNumberEven(randomNum) !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isNumberEven(randomNum)}. Let's try again, ${printName}!`);
    }
  }
  return console.log(`Congratulations, ${printName}!`);
};
export default сheckResponses;
