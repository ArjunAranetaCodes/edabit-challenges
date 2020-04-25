function combinations(items) {
	return [...arguments].reduce((acc,v) => v ? acc*v : acc+v, 1)
}