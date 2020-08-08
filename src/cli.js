import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const userName = readlineSync.question('Your answer: ');
  console.log(`Hello, ${userName}!`);
};

export default getUserName;
