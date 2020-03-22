function countOnes(matrix) {
	const arrNew = matrix.flat(Infinity)
	var count = 0
	for(var x = 0; x < arrNew.length; x++){
		if(arrNew[x] === 1){
			count = count + 1
		}
	}
	
	return count
}