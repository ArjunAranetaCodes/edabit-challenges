function insertWhitespace(s) {
	return s[0]+[...s.substring(1)].map(x=>x.toUpperCase()===x?' '+x:x).join('');
}