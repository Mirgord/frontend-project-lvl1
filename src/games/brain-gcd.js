import checkResponses from '../index.js';

import getRandomInRange from '../utils.js';

const isMaxDevider = (randomNum1, randomNum2) => {
  let devider = randomNum2;
  for (let finish = 1; devider >= finish; devider -= 1) {
    if (randomNum1 % devider === 0 && randomNum2 % devider === 0) {
      return String(devider);
    }
  }
  return 1;
};

const checkMaxDevider = () => {
  const discription = ('Find the greatest common divisor of given numbers.');
  const rounds = (3);
  const array = [];
  for (let i = 0; i < rounds; i += 1) {
    const randomNum1 = getRandomInRange(2, 30);
    const randomNum2 = getRandomInRange(2, 30);
    const response = `${randomNum1} ${randomNum2}`;
    const result = isMaxDevider(randomNum1, randomNum2);
    array.push([response, result]);
  }
  checkResponses(discription, array);
};
export default checkMaxDevider;
