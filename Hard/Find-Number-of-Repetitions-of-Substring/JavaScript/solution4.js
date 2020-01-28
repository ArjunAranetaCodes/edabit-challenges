function numberOfRepeats(str) {
	var pattern = new RegExp(str[0] + str[1], "g");
	return (str.match(pattern) || []).length
}