function reverseAndNot(i) {
	return parseInt(i.toString().split('').reverse().join('').concat(i));
}