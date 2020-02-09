function highLow(str) {
  var nums = str.split(' ');
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}