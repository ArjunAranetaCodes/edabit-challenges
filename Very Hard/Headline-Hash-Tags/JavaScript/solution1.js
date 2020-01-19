function getHashTags(str) {
	return str.split(' ').sort((a, b) => b.length - a.length).slice(0, 3).map(c => '#' + c.replace(/\W/, '').toLowerCase());
}