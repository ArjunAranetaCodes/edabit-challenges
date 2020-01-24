function findLargestNums(arr) {
	var newHigh = []
	for(var x = 0; x < arr.length; x++){
		var arrNums = arr[x]
		arrNums.sort(function(a, b){return b-a});
		newHigh.push(arrNums[0])
	}
	
	return newHigh
}