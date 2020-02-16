function isPrefix(word, prefix) {
	prefix = prefix.substring(0,(prefix.length - 1));
	return prefix == (word.substring(0,prefix.length)) ? true : false ;
}

function isSuffix(word, suffix) {
	suffix = suffix.substring(1,suffix.length);
	return suffix == (word.substr(0-suffix.length)) ? true : false ;	
}