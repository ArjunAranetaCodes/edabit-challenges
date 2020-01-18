function uncensor(str, vowels) {
	str = str.split("");
	vowels = vowels.split("");
	for (let i = 0; i < vowels.length; i++) {
		str[str.indexOf("*")] = vowels[i];
	}
	return str.join("");
}