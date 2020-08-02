import {
  getRandomInRange, getUserName, missingNumber, getUserAnswer,
  getUncorrectAnswer,
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
  const userName = getUserName();
  console.log(missingNumber);
  const rounds = (3);
  for (let i = 0; i < rounds; i += 1) {
    const randomStart = getRandomInRange(2, 50);
    const randomIndex = getRandomInRange(2, 9);
    const progression = getProgression(randomStart);
    const hiddenNumber = progression.splice(randomIndex, 1, '..');
    const userAnswer = getUserAnswer(progression.join(' '));
    const result = hiddenNumber.join();
    if (result === userAnswer) {
      console.log('Correct!');
    }
    if (result !== userAnswer) {
      return getUncorrectAnswer([userAnswer, result, userName]);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default checkProgression;
