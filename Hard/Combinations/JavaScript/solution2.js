function combinations(items) {
	return [...arguments].reduce((acc,item) => item===0 ? acc : acc*item)
}