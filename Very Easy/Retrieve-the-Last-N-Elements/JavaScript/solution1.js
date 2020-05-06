function last(a, n) {
	return n <= a.length ?  a.slice( a.length-n, a.length) : "invalid";
}