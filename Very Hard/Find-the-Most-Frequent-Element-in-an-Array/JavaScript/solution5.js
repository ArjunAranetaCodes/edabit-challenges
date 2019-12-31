function findFrequent(arr) {
	var highFreq
	var intHighFreq = 0
	for(var x = 0; x < arr.length; x++){
		var startInd = arr.indexOf(arr[x])
		var endInd = arr.lastIndexOf(arr[x])
		if(startInd !== endInd){
			intHighFreq = endInd - startInd
			highFreq = arr[x]
		}
	}
	return highFreq
}