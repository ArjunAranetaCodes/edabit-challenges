function asterisk(string) {
	const regex = RegExp('a+[a-z]*c+');

	return regex.test(string);
}