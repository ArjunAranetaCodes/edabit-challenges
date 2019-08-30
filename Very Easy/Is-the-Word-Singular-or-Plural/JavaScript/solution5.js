function isPlural(word) {
	lastLetter = word.charAt(word.length - 1);
	if(lastLetter == "s"){
		return true;
	}
	else {
		return false;
	}
}