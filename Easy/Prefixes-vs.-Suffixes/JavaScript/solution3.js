function isPrefix(word, prefix) {
	var reg = new RegExp('^'+prefix.replace('-',''));
	return reg.test(word)
}

function isSuffix(word, suffix) {
	var reg = new RegExp(suffix.replace('-','')+'$');
	return reg.test(word)
}