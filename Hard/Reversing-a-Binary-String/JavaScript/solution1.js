function reversedBinaryInteger(num) {
	return parseInt(num.toString(2).split('').reverse().join(''), 2);
}