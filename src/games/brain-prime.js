import readlineSync from 'readline-sync';

import {
  welcome, askName, evenNumber,
}
  from '../index.js';

const isNumberPrime = (current) => {
  for (let divider = 2; divider <= current; divider += 1) {
    if (current / divider === 1) {
      return ('yes');
    }
    if (current % divider === 0) {
      return ('no');
    }
  }
  return 1;
};

const сheckPrimeNumbers = () => {
  console.log(welcome);
  console.log(askName);
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  console.log(evenNumber);
  const array = ([15, 6, 7]);
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    const userAnswer = readlineSync.question(`Question: ${current}\nYour answer: `);
    if (isNumberPrime(current) === userAnswer) {
      console.log('Correct!');
    }
    if (isNumberPrime(current) !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isNumberPrime(current)}. Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default сheckPrimeNumbers;
