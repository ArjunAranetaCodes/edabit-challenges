function isStrangePair(str1, str2) {
	if(str1.length < 1 && str2.length < 1) return true
	if(str1.length < 1 || str2.length < 1) return false
	if(str1.charAt(0) === str2.charAt(str2.length - 1) && 
		 	str1.charAt(str1.length - 1) === str2.charAt(0)) return true
	return false
}