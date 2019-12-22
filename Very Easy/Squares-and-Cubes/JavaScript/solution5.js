function checkSquareAndCube(arr) {
var sq=Math.sqrt(arr[0]);
var cube=Math.cbrt(arr[1]);
	if(sq===cube)
		return true;
	else return false;
}