function dictionary(initial, words) {
	return words.filter(x => x.slice(0, initial.length) === initial);
}