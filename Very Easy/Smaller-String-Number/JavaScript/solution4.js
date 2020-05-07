function last(a, n) {
	if ( n <= a.length ) {
	return a.slice(a.length - n, a.length);
	} else {
		return "invalid";
	}
}