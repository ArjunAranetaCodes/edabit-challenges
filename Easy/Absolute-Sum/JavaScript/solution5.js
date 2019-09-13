function getAbsSum(arr){
  let sum = 0; 
  arr.forEach(e => sum += Math.abs(e)); 
  return sum;
}