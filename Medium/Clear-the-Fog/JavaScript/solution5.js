function clearFog(str) {
	const regex = /f|o|g/gi;
	return !regex.test(str) ? "It's a clear day!" : str.toLowerCase().replace(regex, "")
}