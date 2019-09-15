function filterArray(arr) {
  return arr.filter(function(val){
    return typeof val !== 'string';
  });
}