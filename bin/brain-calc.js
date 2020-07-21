#!/usr/bin/env node

import readlineSync from 'readline-sync';
// import { getRandomInRange, welcome, askName } from './index.js';
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
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
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${printName}!`);
    }
  }
  return console.log(`Congratulations, ${printName}!`);
};
сheckResponses();
