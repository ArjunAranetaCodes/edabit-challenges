function addEnding(arr, ending) {
	for(var i=0; i < arr.length; i++){
		arr[i] = arr[i]+ending;
	}
	return arr;
}