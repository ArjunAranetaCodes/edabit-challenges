function firstAndLast(s) {
	let x = s.split('');
	let first = x.sort().join('');
	let last = x.sort().reverse().join('');
	return [first, last];
}