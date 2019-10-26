function addIndexes(arr) {
	var newArr = []
	for(var x = 0; x < arr.length; x++){
		newArr.push(arr[x] + x)
	}
	return newArr
}