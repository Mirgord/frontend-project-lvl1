#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

console.log('May I have your name?');
const printName = readlineSync.question('Your answer: ');
console.log(`Hello, ${printName}!`);

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

const сheckPrimenumbers = (array) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < array.length; i += 1) {
    const current = array[i];
    const userAnswer = readlineSync.question(`Question: ${current}\nYour answer: `);
    if (isNumberPrime(current) === userAnswer) {
      console.log('Correct!');
    }
    if (isNumberPrime(current) !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isNumberPrime(current)}. Let's try again, ${printName}!`);
    }
  }
  return console.log(`Congratulations, ${printName}!`);
};
сheckPrimenumbers([15, 6, 7]);
