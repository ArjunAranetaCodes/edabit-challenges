function charCount(myChar, str) {
	
	return (str.split("").filter(char => char === myChar)).length;
}