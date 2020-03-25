function filterArray(arr){
	return arr.filter(numbers => typeof(numbers) === 'number' && Number.isInteger(numbers));
}