function highLow(str) {
  let a = str.split(' ').map((x) => +x);
  return Math.max(...a) + ' ' + Math.min(...a);
}