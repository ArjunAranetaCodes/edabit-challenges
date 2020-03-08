function isRepdigit(num) {
	return new Set('' + num).size === 1
}