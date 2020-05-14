function filterDigitLength(arr, num) {
	var newArr = []
	for(var x = 0; x < arr.length; x++){
		if(arr[x].toString().length === num){
			newArr.push(arr[x])
		}
	}
	return newArr
}