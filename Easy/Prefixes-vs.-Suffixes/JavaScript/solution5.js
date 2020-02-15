function sortNumsAscending(arr) {
  return arr ? arr.sort(function(a, b){ return a - b; }) : [];
}