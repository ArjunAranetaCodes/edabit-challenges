function canConcatenate(array, target) {
	var mergedArray = array.reduce(function(a,b){return a.concat(b);});
	mergedArray = mergedArray.sort(function(a,b){return a-b;});
	target = target.sort(function(a,b){return a-b;});
	for(var ndx = 0; ndx < mergedArray.length; ndx++){
		if(mergedArray[ndx] != target[ndx]) return false;
	}
	return true;
}