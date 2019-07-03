function charCount(myChar, str) {
	return (str.match(new RegExp(myChar,"g"))||[]).length;
}