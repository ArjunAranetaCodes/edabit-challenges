function getExtension(arr) {
	return arr.map(x => x.split(".").pop())
}