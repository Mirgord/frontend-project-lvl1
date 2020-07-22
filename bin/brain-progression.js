#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getRandomInRange, welcome, askName,
} from '../src/index.js';

console.log(welcome);
console.log(askName);
const printName = readlineSync.question('Your answer: ');
console.log(`Hello, ${printName}!`);
const getProgression = (numb) => {
  const array = [];
  array[0] = numb;
  for (let i = 0; i < 10; i += 1) {
    const lastNumb = array[array.length - 1];
    array.push(lastNumb + 2);
  }
  return array;
};

const checkProgression = () => {
  console.log('What number is missing in the progression?');
  const randomStart = getRandomInRange(2, 50);
  const randomIndex = getRandomInRange(2, 9);
  const arrayNumbers = getProgression(randomStart);
  const hiddenNumber = arrayNumbers.splice(randomIndex, 1, '..');
  console.log(arrayNumbers);
  console.log(hiddenNumber);
  const userAnswer = readlineSync.question(`Question: ${arrayNumbers.join(' ')} \nYour answer: `);
  if (hiddenNumber.join() === userAnswer) {
    console.log('Correct!');
  }
  if (hiddenNumber.join() !== userAnswer) {
    return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenNumber.join()}.\nLet's try again, ${printName}!`);
  }
  return console.log(`Congratulations, ${printName}!`);
};
checkProgression();
