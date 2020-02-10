function highLow(str) {
	var arrNums = str.split(" ");
	var newArr = []
	for(var x = 0; x < arrNums.length; x++){
		newArr.push(parseInt(arrNums[x]))
	}
	if(str.length < 2){
		return [newArr[0], newArr[0]]
	}
	newArr.sort(function(a, b){return a-b});
	
	return newArr[newArr.length - 1].toString() + " " + newArr[0].toString()
}