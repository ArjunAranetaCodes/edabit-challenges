const sum = arr => arr.reduce((total, num) => total + num, 0);

const multiply = arr => arr.reduce((total, num) => total * num, 1);

const additivePersistence = (num, step = 0) =>
  num <= 9
    ? step
    : additivePersistence(sum(Array.from(String(num), Number)), step + 1);

const multiplicativePersistence = (num, step = 0) =>
  num <= 9
    ? step
    : multiplicativePersistence(
        multiply(Array.from(String(num), Number)),
        step + 1
      );