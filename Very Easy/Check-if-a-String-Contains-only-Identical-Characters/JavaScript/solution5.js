function isIdentical(s) {
	return /^(\w)\1*$/.test(s)
}