function clearFog(str) {
	return (/[fog]/gi).test(str) ? str.match(/[^fog]/gi).join("") :"It's a clear day!";
}