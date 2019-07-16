function arrayOfMultiples (num, length) {
	return [...Array(length)].map((_, i) => num * (i + 1))
}