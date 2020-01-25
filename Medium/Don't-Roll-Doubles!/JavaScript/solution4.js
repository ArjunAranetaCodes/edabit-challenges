function diceGame(arr) {
		for(let i of arr){
		if(i[0] == i[1]) return 0;
	}
		 return arr.flat().reduce((c,i) => c + i, 0);
}