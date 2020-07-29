//  Get random number
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const welcome = ('Welcome to the Brain Games!');
const askName = ('May I have your name?');
const askExpression = ('What is the result of the expression?');
const maxDivider = ('Find the greatest common divisor of given numbers.');
const evenNumber = ('Answer "yes" if the number is even, otherwise answer "no"');
const primeNumber = ('Answer "yes" if given number is prime. Otherwise answer "no".');
const missingNumber = ('What number is missing in the progression?');

export {
  getRandomInRange, welcome, askName, askExpression, maxDivider, evenNumber,
  primeNumber, missingNumber,
};
