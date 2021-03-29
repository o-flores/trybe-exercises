const checkAnswer = (answer) => {
  return validateUserAnswer = (userAnswer) => {
    if (answer.toUpperCase() === userAnswer.toUpperCase()) {
      return true;
    }
    return false;
  };
}

console.log(checkAnswer('teste')('TESTE'))