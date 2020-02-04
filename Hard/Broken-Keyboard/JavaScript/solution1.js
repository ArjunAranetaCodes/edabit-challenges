function findBrokenKeys(str1, str2) {
	return [...new Set(str1.split("").filter((a, index) => a !== str2[index]))];
}