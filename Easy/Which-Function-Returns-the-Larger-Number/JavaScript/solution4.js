function whichIsLarger(f, g) {
	if (f() === g()) return 'neither'
	return f() > g () ? 'f' : 'g'
}