function uncensor(str, vowels) {
	while (vowels) {
		str = str.replace(/\*/, vowels[0]);
		vowels = vowels.slice(1);
	}
	return str;
}