function commonLastVowel(str) {
	var vowels = ["a", "e", "i", "o", "u"]
	var vowelsCount = [0,0,0,0,0]
	var maxCount = 0;
	var largestLetter = "";
	for(var x = 0; x < vowels.length; x++){
		var count = str.toLowerCase().split(vowels[x]).length - 1
		vowelsCount[x] = count
	}
	
	var maxIndex = 0;
	for(var x = vowels.length - 1; x > 0; x--){
		if(vowelsCount[x] > 0){
			var index = str.toLowerCase().lastIndexOf(vowels[x]);			
			if(maxIndex < index){
				maxIndex = index;
			}
		}
	}
	
	return str.toLowerCase().charAt(maxIndex);
}