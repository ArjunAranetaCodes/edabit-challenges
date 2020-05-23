function reverseCase(str) {
	return str.split('').map(l => {
		return l.match(/[a-z]/) ? l.toUpperCase() : l.toLowerCase()
	}).join('')
}