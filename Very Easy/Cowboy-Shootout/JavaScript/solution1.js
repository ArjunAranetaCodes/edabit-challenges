const rogerShots = arr => {
	return arr.filter(v => /^(Bang){1,2}!/.test(v)).length / 2;
}