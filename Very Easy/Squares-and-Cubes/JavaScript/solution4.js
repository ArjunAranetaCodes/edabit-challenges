function checkSquareAndCube(arr) {
	var base = Math.pow(arr[0] , (1/2).toPrecision(1))
	return arr[1] === Math.pow(base, 3)
}