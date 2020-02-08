function highLow(str) {
  return Math.max(...str.split(' ')) + ' ' + Math.min(...str.split(' '));
}