function multiplyByLength(arr) {
	for(var i=0; i<arr.length; i++){
		arr[i] = arr[i] * arr.length;
	}
	return arr
}