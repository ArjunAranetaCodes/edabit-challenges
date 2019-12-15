function countSyllables(str) {
	return str.toLowerCase().split('').filter(v => v == str.toLowerCase().slice(-1)).length
}