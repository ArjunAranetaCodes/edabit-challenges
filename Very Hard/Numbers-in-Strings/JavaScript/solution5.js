function happy(n) {
	var arrNum = n.toString().split("")
	var proceed = true
	while(proceed){
		var sum = 0
		for(var x = 0; x < arrNum.length; x++){
			sum = sum + Math.pow(parseInt(arrNum[x]), 2)
		}
		arrNum = sum.toString().split("")
		if(sum.toString().includes("4")){
			return false
			proceed = false
		}else if(sum.toString() === "1"){
			return true
			proceed = false
		}
	}
	return false
}