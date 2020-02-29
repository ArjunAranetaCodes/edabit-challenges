function sumMissingNumbers(arr) {
	var sum = 0;
	for(var x = Math.min(...arr); x <= Math.max(...arr); x++){
		if(!arr.includes(x)){
			sum = sum + x
		}
	}
	return sum
}