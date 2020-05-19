function hammingDistance(str1, str2) {
	return str1.split('')
		.filter((curr, idx) => curr !== str2[idx])
	  .length;
}