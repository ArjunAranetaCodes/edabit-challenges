const sum = arr => arr.reduce((total, num) => total + num, 0);

const multiply = arr => arr.reduce((total, num) => total * num, 1);

const reduceToSingleDigit = num =>
  num <= 9
    ? num
    : reduceToSingleDigit(multiply(Array.from(String(num), Number)));

const sumDigProd = (...nums) => reduceToSingleDigit(sum(nums));