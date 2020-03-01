const sum = arr => arr.reduce((total, num) => total + num, 0);

const sumMissingNumbers = arr => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return (max - min + 1) * ((min + max) / 2) - sum(arr);
};