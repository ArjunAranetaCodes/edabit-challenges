function century(year) {
	let c = Math.ceil(year/100);
	return c + (c == 21 ? 'st' : 'th') + " century";
}