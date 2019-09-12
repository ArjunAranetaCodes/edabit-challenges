function getAbsSum(arr){
  return arr.map(x => Math.abs(x)).reduce((x, y) => x + y);
}