function divisible(arr) {
	var prod = 1
	var sum = 0
	for(var x = 0; x < arr.length; x++){
		prod = prod * arr[x]
		sum = sum + arr[x]
	}
	return prod % sum === 0
}