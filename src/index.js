import readlineSync from 'readline-sync';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
getRandomInRange(1, 49);
const welcome = ('Welcome to the Brain Games!');
const askName = ('May I have your name?');

export {
  getRandomInRange, welcome, askName,
};

// const maxDevider = (randomNum1, randomNum2) => {
//   let NOD = randomNum2;
//   while (NOD >= 1) {
//     if (randomNum1 % NOD === 0 && randomNum2 % NOD === 0) {
//       return NOD;
//     }
//     NOD -= 1;
//   }
//   return 1;
// };

// const сheckResponses = () => {
//   console.log('Find the greatest common divisor of given numbers.');
//   for (let i = 0; i < 3; i += 1) {
//     const randomNum1 = getRandomInRange(2, 30);
//     const randomNum2 = getRandomInRange(2, 30);
//     const userAnswer = readlineSync.question(`Question: ${randomNum1} ${randomNum2}\nYour answer: `);
//     if (maxDevider(randomNum1, randomNum2) === Number(userAnswer)) {
//       console.log('Correct!');
//     }
//     if (maxDevider(randomNum1, randomNum2) !== Number(userAnswer)) {
//       return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${maxDevider(randomNum1, randomNum2)}.\nLet's try again, ${printName}!`);
//     }
//   }
//   return console.log(`Congratulations, ${printName}!`);
// };
// сheckResponses();
