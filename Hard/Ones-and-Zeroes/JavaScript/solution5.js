function sameLength(s) {
	var onesCount = 0;
	var onesArr = []
	
	for(var x = 0; x < s.length; x++){
		if(s[x] == "1"){
			onesCount += 1;
		}
		if(s[x] == "0"){
			if(onesCount > 0){
				onesArr.push(onesCount)
			}
			onesCount = 0;
		}
	}
	
	var newStr = "";
	for(var num of onesArr){
		newStr = newStr + "1".repeat(num) + "0".repeat(num)
	}
	
	if(newStr == s){
		return true
	}else{
		return false
	}
}