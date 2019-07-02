function charCount(myChar, str) {
	return [...str].filter(x => x===myChar).length;
}	