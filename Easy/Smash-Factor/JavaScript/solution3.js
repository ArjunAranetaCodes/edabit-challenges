function isAvgWhole(arr) {
	return !(arr.reduce(function(a,b){return a + b}) % arr.length);
}