function hasIdentical(arr) {
	var hasIden = false;
	var matrix = []
	for(var x = 0; x < arr.length; x++){
		var arrCol = []
		for(var y = 0; y < arr.length; y++){
			arrCol.push(arr[y][x])
		}
		matrix.push(arrCol)
	}		
	
	for(var x = 0; x < arr.length; x++){
		for(var y = 0; y < arr.length; y++){
			if(arr[x].join("") === matrix[y].join("")) hasIden = true
		}
	}
	return hasIden
}