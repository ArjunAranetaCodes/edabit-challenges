function sliceSum(arr, n) {
	return arr.slice(0,n).reduce((acc,curr) => acc + curr, 0);
}