function sumMissingNumbers(arr) {
	var sorted = arr.sort(function(x,y) { return x-y; });
	var missing = [];
	for (var i=sorted[0]; i<=sorted[sorted.length-1]; i++) {
		if (sorted.indexOf(i) === -1) {
			missing.push(i);
		}
	}
	
	return missing.length !== 0 ? missing.reduce((acc,idx) => acc += idx) : 0;
}