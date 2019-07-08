function whichIsLarger(f, g) {
	return f() > g() ? "f" : 
				 f() === g() ? "neither" : "g"
}