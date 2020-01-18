function minSwaps(s1, s2) {
	let count = 0;
	for(let i = 0; i < s1.length; i++){
		if(s1[i] !== s2[i]){
			count++;
		}
	}
	return count/2;
}