function sliceSum(arr, n) {
	return [0, ...arr].slice(0, n+1).reduce((x,y) => x+y)
}