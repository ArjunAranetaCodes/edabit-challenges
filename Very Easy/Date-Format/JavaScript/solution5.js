function mysteryFunc(arr, num) {
  var newArr = []
	for(var x = 0; x < arr.length; x++){
		newArr.push(arr[x] % num)
	}
	return newArr
}