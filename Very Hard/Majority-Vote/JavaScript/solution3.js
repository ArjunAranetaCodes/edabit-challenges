function majorityVote(arr) {
	for(var ndx = 0; ndx < arr.length; ndx++){
		var r = new RegExp(arr[ndx], 'g');
		if(arr.toString().match(r).length > arr.length/2){
			return arr[ndx];
		}
	}
	return null;
}