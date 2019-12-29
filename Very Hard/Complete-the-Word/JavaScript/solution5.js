const isIncreasing = arr =>
  arr
    .slice(1)
    .map((num, i) => Math.sign(arr[i] - num))
    .every(num => num === -1);

const canComplete = (letters, word) =>
  isIncreasing(letters.split('').map(letter => word.indexOf(letter)));