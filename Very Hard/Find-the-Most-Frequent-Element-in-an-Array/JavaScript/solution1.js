function findFrequent(arr) {
	return arr.reduce((a, b) => (
		arr.filter(i => i === a).length >= arr.filter(i => i === b).length ? a : b
	))
}