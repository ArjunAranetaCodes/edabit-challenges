function intWithinBounds(n, lower, upper) {
	if (n >= lower && n < upper && Number.isInteger(n)) return true
	else return false
}