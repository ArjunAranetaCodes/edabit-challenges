function countOnes(i) {
  return (i >>> 0).toString(2).replace(/0/g, '').length;
}