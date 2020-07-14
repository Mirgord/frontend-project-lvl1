import readlineSync from 'readline-sync';

console.log('May I have your name?');
const printName = readlineSync.question('Your answer: ');
const name = printName;
console.log(`Hello, ${name}!`);

export default name;
