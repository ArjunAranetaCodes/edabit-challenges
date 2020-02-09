function toArray(num) {
	var arrNum = num.toString().split("")
	var newArr = []
	for(var x = 0; x < arrNum.length; x++){
		newArr.push(parseInt(arrNum[x]))
	}
	return newArr
}

function toNumber(arr) {
	return parseInt(arr.join(""))
}