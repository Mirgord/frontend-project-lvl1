import {
  getRandomInRange, getUserName, askExpression, getUserAnswer, getUncorrectAnswer,
}
  from '../index.js';

const checkCalc = () => {
  const userName = getUserName();
  console.log(askExpression);
  const rounds = (3);
  const operatores = ('+-*');
  for (let i = 0; i < rounds; i += 1) {
    const num1 = getRandomInRange(1, 10);
    const num2 = getRandomInRange(1, 10);
    const randomIndex = getRandomInRange(0, 2);
    const composition = `${num1} ${operatores[randomIndex]} ${num2}`;
    let result = '';
    switch (operatores[randomIndex]) {
      case '+':
        result = String(num1 + num2);
        break;
      case '-':
        result = String(num1 - num2);
        break;
      default:
        result = String(num1 * num2);
    }
    const userAnswer = getUserAnswer(composition);
    if (result === userAnswer) {
      console.log('Correct!');
    }
    if (result !== userAnswer) {
      return getUncorrectAnswer([userAnswer, result, userName]);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default checkCalc;
