function filterUnique(arr) {
	return arr.filter(a => new Set(a.split('')).size === a.length);
}