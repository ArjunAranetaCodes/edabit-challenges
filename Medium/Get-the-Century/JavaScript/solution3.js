function century(year) {
	const c = Math.floor((year - 1) / 100) + 1;
	return c + (c == 21 ? "st" : "th") + " century"
}