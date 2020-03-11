function findLargestNum(arr) {
  var max = arr[0];
  for(var i = 1; i < arr.length; i++) {
    if(max < arr[i]) {
       max = arr[i];
    }
  }
  return max;
}