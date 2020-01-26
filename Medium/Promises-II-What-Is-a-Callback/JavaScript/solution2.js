function diceGame(arr) {
	return arr.every(e => e[0] != e[1]) ? arr.flat().reduce((a,b) => a+b,0) : 0;
}