function identicalFilter(arr) {
	return arr.filter(i => i === i[0].repeat(i.length))
}