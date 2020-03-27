function dictionary(initial, words) {
	return words.filter(w => w.startsWith(initial))
}