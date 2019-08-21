function minMax(arr) {
  var minmax = [];
  minmax[0] = Math.min(...arr);
  minmax[1] = Math.max(...arr);
  return minmax;
}