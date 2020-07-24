import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('May I have your name?');
const printName = readlineSync.question('Your answer: ');
const name = printName;
console.log(`Hello, ${name}!`);

export default { printName };
