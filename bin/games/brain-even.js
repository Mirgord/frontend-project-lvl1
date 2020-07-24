#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

console.log('May I have your name?');
const printName = readlineSync.question('Your answer: ');
console.log(`Hello, ${printName}!`);

const isNumberEven = (current) => {
  if (current % 2 === 0) {
    return ('yes');
  }
  return ('no');
};

const сheckResponses = (array) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    const userAnswer = readlineSync.question(`Question: ${current}\nYour answer: `);
    if (isNumberEven(current) === userAnswer) {
      console.log('Correct!');
    }
    if (isNumberEven(current) !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isNumberEven(current)}. Let's try again, ${printName}!`);
    }
  }
  return console.log(`Congratulations, ${printName}!`);
};
сheckResponses([15, 6, 7]);
