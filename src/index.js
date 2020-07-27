//  Get random number
const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
getRandomInRange(1, 49);

const welcome = ('Welcome to the Brain Games!');
const askName = ('May I have your name?');

export { getRandomInRange, welcome, askName };
