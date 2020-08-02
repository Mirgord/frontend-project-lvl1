import {
  getUserName, primeNumber, getUserAnswer, getUncorrectAnswer,
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
  const userName = getUserName();
  console.log(primeNumber);
  const array = ([15, 6, 7]);
  const rounds = (3);
  for (let i = 0; i < rounds; i += 1) {
    const current = array[i];
    const userAnswer = getUserAnswer(current);
    const result = isNumberPrime(current);
    if (result === userAnswer) {
      console.log('Correct!');
    }
    if (result !== userAnswer) {
      return getUncorrectAnswer([userAnswer, result, userName]);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default сheckPrimeNumbers;
