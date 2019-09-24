function specialReverse(s, c) {
	return s.split(' ').map(x => x.startsWith(c) ? x.split('').reverse().join('') : x).join(' ')
}