function getWord(left, right) {
	var newStr = left + right
	return newStr.charAt(0).toUpperCase() + newStr.slice(1)
}