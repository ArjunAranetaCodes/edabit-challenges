function sliceSum(arr, n) {
	var sum = 0;
	if(n > arr.length) n = arr.length
	for(var x = 0; x < n; x++){
		sum = sum + arr[x]
	}
	return sum
}