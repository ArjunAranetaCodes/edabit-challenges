function addIndexes(arr) {
	let fakaArr = []
	for(let i = 0; i < arr.length; i++){
		fakaArr.push(arr[i]+i)
	}
	return fakaArr
}