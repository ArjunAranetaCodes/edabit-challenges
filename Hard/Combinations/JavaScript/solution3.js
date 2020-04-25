function numInStr(arr) {
	return arr.filter(arrItem => {
		let valid = false;
		arrItem.split("").forEach(char => {
			if(Number.isInteger(parseInt(char))) valid = true
		})
		if(valid) return arrItem
	})
}