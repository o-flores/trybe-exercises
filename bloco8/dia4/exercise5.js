const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // return names.reduce((acc, cur) => {
  //   const curToLowerCase = cur.toLowerCase();
  //   for (let index = 0; index < curToLowerCase.length; index +=1) {
  //     if (curToLowerCase[index] === 'a') acc += 1; 
  //   }
  //   return acc;
  // }, 0)
  return names.reduce((acc, cur) => {
    return acc + cur.split('').reduce((sum, letter) => {
      if (letter === 'a' || letter === 'A') return sum + 1;
      return sum;
    },0)},0)
}

assert.deepStrictEqual(containsA(), 20);