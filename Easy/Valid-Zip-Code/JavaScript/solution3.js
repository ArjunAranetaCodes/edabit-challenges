function isValid(zip) {
	if(zip.toString().length == 5 && zip - zip == 0){return true}
	return false
}