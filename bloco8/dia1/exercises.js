const checkAnswers = (array1, array2) => {
  let sum = 0;
  for (let index = 0; index < array1.length; index += 1) {
    if (array2[index] !== 'N.A') {
      if (array1[index] === array2[index]) {
        sum += 1;
      } else {
        sum -= 0.5;
      }
    }
  }
  return sum;
}

const checkTestAnswers = (rightAnswers, userAnswers, checkAnswers) => {
  return checkAnswers(rightAnswers, userAnswers);
}


console.log(checkTestAnswers(['a','b','c','a'],['N.A','b','c','d'],checkAnswers));
