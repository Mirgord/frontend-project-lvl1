import readlineSync from 'readline-sync';

const rounds = 3;

const run = (discription, data) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
  console.log(discription);

  for (let i = 0; i < rounds; i += 1) {
    const [question, rightAnswer] = data[i];
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    }
    if (rightAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export { run, rounds };
