function getLength(arr) {
	return arr.reduce((acc,el, index) => {
		return Array.isArray(el) ? acc + getLength(el) : acc + 1
	} , 0)
}