const clone = require('clone');

function shuffleWhiShift(array) {
  let indicies = Array.from(Array(array.length).keys());
  const SHIFT_BOUND = 3;
  const isLoop = (indicies) => indicies.length !== 0 && indicies.length !== SHIFT_BOUND;
  const getRandIndex = (indicies) => indicies[Math.floor(Math.random() * indicies.length)];
  const clearIndicies = (indicies, i) => {
    indicies.splice(indicies.findIndex(v => v === i), 1);
    return indicies;
  };

  while (isLoop(indicies)) {
    const firstIndex = getRandIndex(indicies);
    indicies = clearIndicies(indicies, firstIndex);
    const secondIndex = getRandIndex(indicies);
    indicies = clearIndicies(indicies, secondIndex);
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
  }

  if(indicies.length === SHIFT_BOUND){
    const [i1, i2, i3] = indicies;
    const temp = array[i1];
    array[i1] = array[i2];
    array[i2] = array[i3];
    array[i3] = temp;
  }

  return array;
}


const secretSanta = participants => {
  return shuffleWhiShift(clone(participants)).map((person, index) => {
    return Object.assign(person, {felicitate: participants[index]});
  });
};

exports.secretSanta = secretSanta;
