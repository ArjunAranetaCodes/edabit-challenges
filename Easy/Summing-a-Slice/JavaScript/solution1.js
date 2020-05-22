const sliceSum = (arr, n) => {
	return arr.slice(0, n).reduce((acc, cv) => acc + cv, 0)
}