const sumAB = (a, b) => ((b - a + 1) * (a + b)) >> 1;
const sum = ar => ar.reduce((a,v) => a + v, 0);
const sumMissingNumbers = arr => sumAB(Math.min(...arr), Math.max(...arr)) - sum(arr);