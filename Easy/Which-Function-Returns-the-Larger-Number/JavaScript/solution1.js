function whichIsLarger(f, g) {
	return f()>g()?'f':g()>f()?'g':'neither'
}