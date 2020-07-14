import readlineSync from 'readline-sync';

console.log('May I have your name?');
const printName = readlineSync.question('Your answer: ');
console.log(`Hello, ${printName}!`);

export default printName;
