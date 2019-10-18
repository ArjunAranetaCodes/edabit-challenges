function getBudgets(arr) {
	var sum = 0;
	for(var x = 0; x < arr.length; x++){
		sum = sum + arr[x].budget
	}
	return sum
}