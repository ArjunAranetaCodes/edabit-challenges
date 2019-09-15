function filterArray(arr) {
  var returnArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number") {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}