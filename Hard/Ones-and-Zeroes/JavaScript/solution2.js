function sameLength(s) {
	return JSON.stringify(s.match(/1+/g)) ===
				JSON.stringify(s.match(/0+/g).map(el => el = el.replace(/0/g, '1')));
}