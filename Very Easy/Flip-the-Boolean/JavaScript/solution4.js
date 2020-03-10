function reverse(bool) {
	if (typeof bool === 'boolean') {
		return !bool
	} else {
		return 'boolean expected'
	}
}