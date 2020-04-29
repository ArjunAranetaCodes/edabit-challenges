function isIdentical(s) {
	return s.split('').every(el => el === s[0]);
}