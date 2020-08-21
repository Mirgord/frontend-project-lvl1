import { run, rounds } from '../index.js';
import getRandomInRange from '../utils.js';

const discription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (startValue, progressionStep) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startValue + i * progressionStep);
  }
  return progression;
};

const runGame = () => {
  const gameData = [];

  for (let i = 0; i < rounds; i += 1) {
    const startValue = getRandomInRange(2, 20);
    const progressionStep = getRandomInRange(2, progressionLength - 1);
    const randomIndex = getRandomInRange(2, progressionLength - 1);
    const progression = getProgression(startValue, progressionStep);
    const hiddenNum = progression.splice(randomIndex, 1, '..');
    gameData.push([progression.join(' '), String(hiddenNum)]);
  }
  run(discription, gameData);
};
export default runGame;
