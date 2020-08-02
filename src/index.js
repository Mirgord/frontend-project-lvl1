import readlineSync from 'readline-sync';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const welcome = ('Welcome to the Brain Games!');
const askName = ('May I have your name?');
const askExpression = ('What is the result of the expression?');
const maxDivider = ('Find the greatest common divisor of given numbers.');
const evenNumber = ('Answer "yes" if the number is even, otherwise answer "no"');
const primeNumber = ('Answer "yes" if given number is prime. Otherwise answer "no".');
const missingNumber = ('What number is missing in the progression?');

const getUserName = () => {
  console.log(welcome);
  console.log(askName);
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getUserAnswer = (response) => {
  const userAnswer = readlineSync.question(`Question: ${response} \nYour answer: `);
  return userAnswer;
};

const getUncorrectAnswer = (coll) => {
  const [userAnswer, result, userName] = coll;
  return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
};
export {
  getRandomInRange, askExpression, maxDivider, evenNumber,
  primeNumber, missingNumber, getUserName, getUserAnswer, getUncorrectAnswer,
};
