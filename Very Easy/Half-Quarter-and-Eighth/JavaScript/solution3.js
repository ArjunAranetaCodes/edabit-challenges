function mdFormat(word, style) {
	let obj = {b: '**', i: '_',	c: '`',	s: '~~'};
	return obj[style] + word + obj[style];
}