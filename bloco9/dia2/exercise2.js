const randomNumber = () => Math.floor((Math.random() * 50) + 1);

const addRandomNumberToArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    array.push(randomNumber());
  }
  return array;
}
const elevarAoQuadrado = (array) => array.map((number) => number * number);
const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const array = elevarAoQuadrado(addRandomNumberToArray(10));
    const sum = array.reduce(((acc, cur) => acc + cur), 0);
    sum < 8000 ? resolve(sum) : reject();
  });

  promise
    .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
    .then((array) => console.log(array.reduce((sum, number) => sum + number, 0)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};



fetchPromise();
