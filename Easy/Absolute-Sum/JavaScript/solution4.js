function getAbsSum(arr){
 
  return arr.reduce((a, b)=> a + Math.abs(b), 0);
}