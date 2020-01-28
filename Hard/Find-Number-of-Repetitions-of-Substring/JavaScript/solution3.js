function rootDigit(n) {
	var arrN = n.toString().split("")
	var sum = 0
	while(arrN.length > 1){
		sum = 0
		for(var x= 0; x < arrN.length; x++){
			sum = sum + parseInt(arrN[x])
		}
		arrN = sum.toString().split("")		
	}
	return sum
}