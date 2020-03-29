function firstAndLast(s) {
	return [
		[...s].sort().join(''),
		[...s].sort( (a, b) => a < b).join('')
	]
}