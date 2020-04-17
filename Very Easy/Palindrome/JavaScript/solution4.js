function checkPalindrome(str) {
	return str == [...str].reverse().join('')
}