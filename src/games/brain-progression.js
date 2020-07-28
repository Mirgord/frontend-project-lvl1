import readlineSync from 'readline-sync';

import {
  getRandomInRange, welcome, askName, missingNumber,
} from '../index.js';

const getProgression = (numb) => {
  const array = [];
  array[0] = numb;
  const finish = (10);
  for (let i = 0; i < finish; i += 1) {
    const lastNumb = array[array.length - 1];
    array.push(lastNumb + 2);
  }
  return array;
};

const checkProgression = () => {
  console.log(welcome);
  console.log(askName);
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  console.log(missingNumber);
  const rounds = (3);
  for (let i = 0; i < rounds; i += 1) {
    const randomStart = getRandomInRange(2, 50);
    const randomIndex = getRandomInRange(2, 9);
    const arrayNumbers = getProgression(randomStart);
    const hiddenNumber = arrayNumbers.splice(randomIndex, 1, '..');
    const userAnswer = readlineSync.question(`Question: ${arrayNumbers.join(' ')} \nYour answer: `);
    if (hiddenNumber.join() === userAnswer) {
      console.log('Correct!');
    }
    if (hiddenNumber.join() !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenNumber.join()}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default checkProgression;
