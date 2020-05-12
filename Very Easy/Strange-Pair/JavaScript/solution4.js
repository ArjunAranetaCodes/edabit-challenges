function isStrangePair(str1, sstr2) {
　　return (str1.charAt(0) == sstr2.charAt(sstr2.length-1) &&
				 sstr2.charAt(0) == str1.charAt(str1.length-1))
}