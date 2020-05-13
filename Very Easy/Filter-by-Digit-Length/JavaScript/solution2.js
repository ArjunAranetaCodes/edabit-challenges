function isStrangePair(str1, sstr2) {
	return str1[0] === sstr2[sstr2.length-1] && str1[str1.length-1] === sstr2[0];
}