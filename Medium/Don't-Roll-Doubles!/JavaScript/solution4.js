function filterUnique(arr) {
	return arr.filter(value =>  value === value.split("").reduce((acc , character) => ( acc.includes(character) ) ? acc : acc.concat([character])));
}