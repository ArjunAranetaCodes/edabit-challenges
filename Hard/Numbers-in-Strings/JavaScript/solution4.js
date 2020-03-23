function canConcatenate(arr, target) {
	var newArr = arr.flat(Infinity)
	newArr.sort(function(a, b){return a-b});
	target.sort(function(a, b){return a-b});
	if(JSON.stringify(newArr) === JSON.stringify(target)){
		return true
	}else{
		return false
	}
}