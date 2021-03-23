const longestWord = (phrase) => {
  const words = phrase.split(' ');
  let count =[];
  for (let index = 0; index < words.length; index +=1) {
    count.push(words[index].length);
  }
  return words[indexOfHigherNumber(words)];
}

const indexOfHigherNumber = (array) => {
  let higher = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > higher) {
      higher = array[index];
    }
  }
  let number = array.indexOf(higher) - 1;
  return number;
}
console.log(longestWord('A maior palavra é esta aqui'))