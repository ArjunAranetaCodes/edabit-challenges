function countOnes(i) {
  return i.toString(2).split('').reduce((a, b) => +a + +b, 0);
}