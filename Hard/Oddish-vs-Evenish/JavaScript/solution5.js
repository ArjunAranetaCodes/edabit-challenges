function oddishOrEvenish(num) {
	var arrNum = num.toString().split("")
	var sum = 0
	for(var num of arrNum){
		sum = sum + parseInt(num)
	}
	return (sum % 2 == 0) ? "Evenish" : "Oddish"
}