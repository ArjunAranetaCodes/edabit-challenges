function indexMultiplier(arr) {
	return arr.reduce((acc,cv,i)=> acc + cv*i,0)
}