function toArray(obj) {
	var arrObj = []
	for (let [key, value] of Object.entries(obj)) {
		var tempArr = [key, value]
		arrObj.push(tempArr)
	}
	return arrObj
}