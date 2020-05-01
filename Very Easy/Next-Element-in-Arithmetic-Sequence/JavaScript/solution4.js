function existsHigher(arr, n) {
	return arr.filter(x=>x>=n).length > 0;
}