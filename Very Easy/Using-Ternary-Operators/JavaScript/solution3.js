function hammingDistance(str1, str2) {
	let hamming = 0;
	for (let i = 0; i < str1.length; i++){
		if (str1[i] !== str2[i]) {
			hamming++;
		}
	}
	return hamming;
}