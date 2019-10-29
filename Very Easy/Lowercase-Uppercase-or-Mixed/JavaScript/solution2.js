function getCase(str) {
	if (str.toUpperCase() === str) {
		return "upper"
	} else if (str.toLowerCase() === str) {
		return "lower"
	} else {
		return "mixed"
	}
}