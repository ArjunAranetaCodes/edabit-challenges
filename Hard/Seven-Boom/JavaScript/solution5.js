function sevenBoom(arr) {
	return arr
		.join('')
		.split('')
		.includes('7') ? "Boom!" : "there is no 7 in the array"
}