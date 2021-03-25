const assert = require('assert');

function sum(a,b) {
  if (typeof(a) !== 'number' || typeof(b) !== 'number') {
    throw new Error ('parametros devem ser numeros');
  }
  return a + b;
}

assert.strictEqual(sum(1,1),2);
assert.strictEqual(sum(4,5),9);
assert.strictEqual(sum(0,0),0);
// assert.strictEqual(sum(4,'5'),9);

function myRemove(arr, item) {
  let result = [];
  for (index of arr) {
    if (index !== item) {
      result.push(index);
    }
  }
  return result;
}

assert.deepStrictEqual(myRemove([1,2,3,4],3),[1,2,4]);
assert.notDeepStrictEqual(myRemove([1,2,3,4],3),[1,2,3,4]);

const teste = [1,2,3,4,5];
myRemove(teste,2);
assert.deepStrictEqual(teste,[1,2,3,4,5]);

assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4]);
