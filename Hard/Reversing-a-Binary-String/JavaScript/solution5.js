function reversedBinaryInteger(num) {
	return parseInt((num >>> 0).toString(2).split("").reverse().join(""), 2);
}