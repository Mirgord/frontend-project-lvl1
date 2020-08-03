import readlineSync from 'readline-sync';

const checkResponses = (discription, coll) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  const rounds = (3);
  console.log(discription);
  for (let i = 0; i < rounds; i += 1) {
    const current = coll[i];
    const value = current[0];
    const result = current[1];
    const userAnswer = readlineSync.question(`Question: ${value}\nYour answer: `);
    if (result === userAnswer) {
      console.log('Correct!');
    }
    if (result !== userAnswer) {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
export default checkResponses;
