const assert = require('assert');

function getChange(price, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let result = [];
  let change = paid - price;
  if (paid < price) {
    throw new Error('paid value is not enough');
  }
  for (coin of coins) {
    let numberOfTimes = Math.floor(change/coin);
    for (let index = 1; index <= numberOfTimes; index += 1) {
      result.push(coin);
      change -= coin*numberOfTimes;
    }
  }
  return result;
}

let result = getChange(1, 1); // no change/coins just an empty array
let expected = [];
assert.deepStrictEqual(result, expected);

result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
expected = [50, 20, 10, 5];
assert.deepStrictEqual(result, expected);

result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
expected = [100, 10, 2, 2];
assert.deepStrictEqual(result, expected);

result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
expected = [200, 100, 50, 20, 10, 5, 2, 1];
assert.deepStrictEqual(result, expected);

assert.throws(() => { getChange(100, 10); }, /^Error: paid value is not enough$/);