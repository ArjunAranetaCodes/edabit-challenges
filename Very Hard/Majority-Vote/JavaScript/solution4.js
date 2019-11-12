function majorityVote(arr) {
	const arrMap = new Map([...new Set(arr)].map(
  	x => [x, arr.filter(y => y === x).length]
	));
	
	var max = 0
	var maxLetter = null
	for (let [key, value] of arrMap) {		
		if(max < value){
			max = value
			maxLetter = key
		}else if(max == value){
			maxLetter = null
		}
	}
	return maxLetter
}