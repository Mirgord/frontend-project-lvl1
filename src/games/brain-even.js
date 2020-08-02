import {
  getUserName, evenNumber, getRandomInRange, getUserAnswer, getUncorrectAnswer,
}
  from '../index.js';

const isNumberEven = (current) => {
  if (current % 2 === 0) {
    return ('yes');
  }
  return ('no');
};

const сheckResponses = () => {
  const userName = getUserName();
  console.log(evenNumber);
  const rounds = (3);
  for (let i = 0; i < rounds; i += 1) {
    const randomNum = getRandomInRange(1, 20);
    const userAnswer = getUserAnswer(randomNum);
    const result = isNumberEven(randomNum);
    if (result === userAnswer) {
      console.log('Correct!');
    }
    if (result !== userAnswer) {
      return getUncorrectAnswer([userAnswer, result, userName]);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default сheckResponses;
