function isPrefix(word, prefix) {
	prefix = prefix.replace("-", "")
	if(word.startsWith(prefix)){
		return true
	}
	return false
}

function isSuffix(word, suffix) {
	suffix = suffix.replace("-", "")
	if(word.endsWith(suffix)){
		return true
	}
	return false
}