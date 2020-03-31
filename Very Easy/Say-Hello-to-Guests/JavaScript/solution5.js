function getExtension(arr) {
	newArr = []
	for (let el of arr){
		newArr.push(el.split('.')[1])
	} return newArr
}