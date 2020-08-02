import {
  getRandomInRange, getUserName, maxDivider, getUserAnswer, getUncorrectAnswer,
}
  from '../index.js';

const isMaxDevider = (randomNum1, randomNum2) => {
  let devider = randomNum2;
  for (let finish = 1; devider >= finish; devider -= 1) {
    if (randomNum1 % devider === 0 && randomNum2 % devider === 0) {
      return String(devider);
    }
  }
  return 1;
};

const сheckResponses = () => {
  const userName = getUserName();
  console.log(maxDivider);
  const rounds = (3);
  for (let i = 0; i < rounds; i += 1) {
    const randomNum1 = getRandomInRange(2, 30);
    const randomNum2 = getRandomInRange(2, 30);
    const response = `${randomNum1} ${randomNum2}`;
    const userAnswer = getUserAnswer(response);
    const result = isMaxDevider(randomNum1, randomNum2);
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
