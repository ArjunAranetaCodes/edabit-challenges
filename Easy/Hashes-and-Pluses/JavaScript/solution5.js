function findLargestNums(arr) {
  return arr.reduce(function(a, b) {
  	return a.concat(Math.max.apply(Math, b));
  }, []);
}