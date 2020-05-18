function hammingDistance(str1, str2) {

	 let x = str1.split('');
	let y = str2.split('');
	let hamming = 0;
	for(i = 0; i<x.length;i++){
		if(x[i]!==y[i]){hamming++}
	}
	return hamming;
	
	
	
}