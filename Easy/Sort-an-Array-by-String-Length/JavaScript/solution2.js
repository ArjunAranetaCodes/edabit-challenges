function reverseCase(str) {
	return str.split('').map(a => a == a.toLowerCase() ? a.toUpperCase()
				 : a.toLowerCase()).join('');
}