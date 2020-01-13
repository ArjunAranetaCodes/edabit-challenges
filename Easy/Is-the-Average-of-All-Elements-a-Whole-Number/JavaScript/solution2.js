function isAvgWhole(arr) {
	return Number.isInteger(arr.reduce((x,y) => x+y)/arr.length)
}