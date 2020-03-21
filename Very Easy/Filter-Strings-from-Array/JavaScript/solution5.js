function filterArray(arr){
	result = arr.filter(removeStrings);
	
	function removeStrings(a){
		if (typeof (a) === 'number' && a % 1 == 0){
			return true;
		}else {
			return false;
		}
	}
	return result;
}