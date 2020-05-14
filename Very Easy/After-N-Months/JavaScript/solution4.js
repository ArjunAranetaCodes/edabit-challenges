function filterDigitLength(arr, num) {
	return (arr || []).filter(e=>{
	    return e.toString().length === num
	})
}