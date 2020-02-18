function boxSeq(step) {
	var totalBoxes = 0
	for(var x = 1; x <= step; x++){
		if(x % 2 == 0){
			totalBoxes = totalBoxes - 1
		}else{
			totalBoxes = totalBoxes + 3
		}
	}
	return totalBoxes
}