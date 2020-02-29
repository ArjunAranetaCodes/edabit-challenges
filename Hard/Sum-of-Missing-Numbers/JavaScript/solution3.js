function findBrokenKeys(str1, str2) {
	return [...new Set([...str1].filter((val, i) => val !== str2[i]))]
}