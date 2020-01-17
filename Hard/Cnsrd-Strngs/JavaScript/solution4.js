function era(er, ip) {
	var newNum = Number.parseFloat((er / ip) * 9)
	var dotInd = newNum.toString().indexOf(".")
	var strNum = ""
	if(dotInd > 0){
		strNum = newNum.toString().substring(0, dotInd + 3)
	}else{
		strNum = newNum.toFixed(2).toString()
	}
	return strNum
}