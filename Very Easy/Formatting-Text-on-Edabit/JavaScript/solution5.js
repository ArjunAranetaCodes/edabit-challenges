function mdFormat(word, style) {
	const surround = {b: "**", i: "_", c: "`", s: "~~"}[style];
	return `${surround}${word}${surround}`;
}