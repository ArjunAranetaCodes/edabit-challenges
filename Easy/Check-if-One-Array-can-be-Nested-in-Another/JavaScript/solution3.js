function canNest(arr1, arr2) {
	var arr1Min = Math.min(...arr1);
	var arr2Min = Math.min(...arr2);
	var arr1Max = Math.max(...arr1);
	var arr2Max = Math.max(...arr2);
	
	if((arr1Min > arr2Min) && (arr1Max < arr2Max)){
		return true;
	}else{
		return false;
	}
}