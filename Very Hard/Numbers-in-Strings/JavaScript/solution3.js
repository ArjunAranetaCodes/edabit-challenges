const sum = arr => arr.reduce((total, num) => total + num, 0);

const getDigits = num => String(num).split('').map(Number);

const happy = num => {
  if (num === 1) return true;
  if (num === 4) return false;
  return happy(sum(getDigits(num).map(digit => Math.pow(digit, 2))));
};