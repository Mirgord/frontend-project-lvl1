#!/usr/bin/env node

import readlineSync from 'readline-sync';
// import {
//   cons, car, cdr, toString, isPair,
// } from '@hexlet/pairs';
// import { getRandomInRange, welcome, askName } from './index.js';
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
getRandomInRange(1, 49);
// const randomNum1 = getRandomInRange();
// const randomNum2 = getRandomInRange();
const welcome = ('Welcome to the Brain Games!');
const askName = ('May I have your name?');

console.log(welcome);
console.log(askName);
const printName = readlineSync.question('Your answer: ');
console.log(`Hello, ${printName}!`);

const сheckResponses = () => {
  console.log('What is the result of the expression?');
  const operatores = ('+-*');
  for (let i = 0; i < operatores.length; i += 1) {
    const current = operatores[i];
    const num1 = getRandomInRange();
    const num2 = getRandomInRange();
    const result = (`${num1} ${current} ${num2}`);
    const userAnswer = readlineSync.question(`Question:${num1} ${current} ${num2}\nYour answer: `);
    if (result === userAnswer) {
      console.log('Correct!');
    }
    if (result !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\n Let's try again, ${printName}!`);
    }
  }
  return console.log(`Congratulations, ${printName}!`);
};
сheckResponses();
