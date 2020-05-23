const isLowerCase = str => str === str.toLowerCase();

const reverseCase = str =>
  str
    .split('')
    .map(char => (isLowerCase(char) ? char.toUpperCase() : char.toLowerCase()))
    .join('');