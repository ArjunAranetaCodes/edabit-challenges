const sum = arr => arr.reduce((total, num) => total + num, 0);

const values = [0.25, 0.1, 0.05, 0.01];

const changeEnough = (change, amountDue) =>
  sum(change.map((amount, i) => amount * values[i])) >= amountDue;