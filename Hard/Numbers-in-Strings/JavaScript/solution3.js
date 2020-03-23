function canConcatenate(arr, target) {
	return JSON.stringify(arr.flat().sort()) === JSON.stringify(target.sort());
}