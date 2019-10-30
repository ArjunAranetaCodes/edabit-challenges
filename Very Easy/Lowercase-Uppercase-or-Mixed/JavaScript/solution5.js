function getCase(str) {
	return str.toLowerCase()===str ? 'lower' : str===str.toUpperCase() ? 'upper' : 'mixed'
}