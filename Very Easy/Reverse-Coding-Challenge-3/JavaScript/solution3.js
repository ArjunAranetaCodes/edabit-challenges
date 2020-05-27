function mysteryFunc(arr, num) {
  var newArr = [];
	for (var i = 0; i < arr.length; i++){
		newArr.push(arr[i]%num);
	}
	return newArr;
}