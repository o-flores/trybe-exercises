const getLargestNumber = (array) => {
  let result = array.slice().sort((a,b) => b - a)[0];
  console.log(array)
  return result;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const assert = require('assert');


assert.strictEqual(getLargestNumber(parameter), result)