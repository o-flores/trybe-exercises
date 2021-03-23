const oddsAndEvensArray = [13, 3, 4, 10, 7, 2];
const oddsAndEvens = (array) => array.sort(function(a,b){return a - b});

console.log(oddsAndEvens(oddsAndEvensArray));