function getAbsSum(arr){
  return arr.reduce((count, num) => count + Math.abs(num), 0)
}