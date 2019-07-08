function whichIsLarger(f, g) {
	return f() > g() ? "f" : f() < g() ? "g" : "neither";
}