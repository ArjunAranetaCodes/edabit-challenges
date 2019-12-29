function canComplete(initial, word) {
	var indPrev = 0
	for(var x = 0; x < initial.length; x++){
		if(word.indexOf(initial.charAt(x)) >= indPrev){
			 indPrev = word.indexOf(initial.charAt(x)) + 1
		}else{
			return false
		}
	}
	return true
}