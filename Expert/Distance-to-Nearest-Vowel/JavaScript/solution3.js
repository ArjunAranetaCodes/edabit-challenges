function distanceToNearestVowel(str) {
	var letters = str.split("")
	var arrDistance = []
	
	for(var x = 0; x < letters.length; x++){
		var right = 0;
		var left = 0;
		
		for(var y = x; y < letters.length; y++){
			if("aeiou".includes(letters[y])){
				right = y - x;
				break
			}
		}
		
		for(var y = x; y >= 0; y--){
			if("aeiou".includes(letters[y])){
				left = x - y;
				break
			}
		}
		
		var position = 0
		if(!"aeiou".includes(letters[x])){
			if(left == 0) {position = right}
			else if(right == 0) {position = left}
			else if(right == left) {position = right}
			else{
				if(right > left){position = left}else{position = right}
			}
		}
		arrDistance.push(position)
	}
	return arrDistance
}