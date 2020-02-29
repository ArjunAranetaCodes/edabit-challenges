function findBrokenKeys(str1, str2) {
	var arrBroken = []
	for(var x = 0; x < str1.length; x++){
		if(str1.charAt(x) !== str2.charAt(x)){
			if(!arrBroken.includes(str1.charAt(x))){
			 arrBroken.push(str1.charAt(x))	
			}			
		}			
	}
	return arrBroken
}