function isAvgWhole(arr) {
	return Number.isInteger(arr.reduce((accum, val) => accum + val) / arr.length) 
}