function reverseOdd(str) {
	return str.split(' ').map(word => (word.length % 2 == 0)? word : word.split('').reverse().join('')).join(' ');
}