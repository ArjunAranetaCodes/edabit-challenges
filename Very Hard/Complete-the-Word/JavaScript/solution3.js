function canComplete(initial, word) {
	if (initial === ""){
		return true;
	}
	for (let  i = 0 ; i<word.length ; i++){
		let currentCharacterOfWord = word[i];
		let currentCharacterOfInitial = initial[0];
		if (currentCharacterOfInitial === currentCharacterOfWord){
				return canComplete(initial.substring(1) , word.substring(i+1));
			}
		}
	return false;
}