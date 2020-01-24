function hashPlusCount(str) {
	return [str.split('+').join('').length, str.split('#').join('').length]
}