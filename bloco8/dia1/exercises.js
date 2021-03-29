const generateRandomNumber = () => Math.round(Math.random()*5);

const verifyNumber = (number1, number2) => {
  if (number1 === number2) {
    return `Parabéns você ganhou`;
  }
  return `Tente novamente`;
}

const checkSorteio = (numero, verifyNumber) => {
  let numeroSorteado = generateRandomNumber();
  return verifyNumber(numero, numeroSorteado);
}

console.log(checkSorteio(4,verifyNumber));
