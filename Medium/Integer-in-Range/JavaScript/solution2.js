function rev(n) {
	var strNum = ""
	if(n < 0) n = n * -1
	while(n > 0){
		var rem = n % 10
		strNum = strNum + rem.toString()
		n = parseInt(n / 10)
	}
	return strNum
}