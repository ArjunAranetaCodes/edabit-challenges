function numInStr(arr) {
	return arr.filter(x => /[0-9]/.test(x));
}