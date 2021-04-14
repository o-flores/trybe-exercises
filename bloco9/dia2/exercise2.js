const randomNumber = () => Math.floor((Math.random() * 50) + 1);

const addRandomNumberToArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    array.push(randomNumber());
  }
  return array;
}
const elevarAoQuadrado = (array) => array.map((number) => number * number);

const sumOfRandomNumbers = () => {
  const array = elevarAoQuadrado(addRandomNumberToArray(10));
  const sum = array.reduce((acc, cur) => acc + cur, 0);
  if (sum >= 8000) {
    throw new Error();
  }
  return sum;
};

const sumOfArrayFromSum = (sum) => {
  return [2, 3, 5, 10].map((number) => sum / number)
    .reduce((sum, number) => sum + number, 0);
}

const fetchPromise = async () => {
  try {
    const sum = await sumOfRandomNumbers();
    const sumOfArray = await sumOfArrayFromSum(sum);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();