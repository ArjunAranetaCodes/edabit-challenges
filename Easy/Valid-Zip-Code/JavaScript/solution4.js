function isValid(zip) {
var regexTest = RegExp(/[0-9]{5}/);
	return regexTest.test(zip)
}