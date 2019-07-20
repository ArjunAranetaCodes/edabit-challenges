function identicalFilter(arr) {
	return arr.filter(val => {
		return new Set(val.split('')).size == 1
	})
}