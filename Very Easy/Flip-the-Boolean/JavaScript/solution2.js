function reverse(bool) {
	if (typeof bool !== 'boolean') return "boolean expected"
	return !bool
}