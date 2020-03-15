function replaceVowels(str, ch) {
	var newStr = ""
	for(var x = 0; x < str.length; x++){
		if(("aeiou").includes(str.charAt(x))){
			newStr = newStr + ch
		}else{
			newStr = newStr + str.charAt(x)
		}
		
	}
	return newStr
}