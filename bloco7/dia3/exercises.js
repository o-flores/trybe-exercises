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


function myRemoveWithoutCopy(arr,item) {
  for (let index = 0; index <= arr.length; index +=1) {
    if (arr[index] === item) {
      arr.splice(index,1);
    }
  }
  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],3),[1,2,4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4],3),[1,2,3,4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],5),[1,2,3,4]);

const teste2 = [1,2,3,4,5];
myRemoveWithoutCopy(teste2,2);
assert.notDeepStrictEqual(teste2,[1,2,3,4,5]);

function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter),result);