const halfQuarterEighth = n => {
  let newArray = [];
  for (let i = 0; i <= 2; i++) {
    n = n / 2;
    newArray.push(n);
  }
  return newArray;
};