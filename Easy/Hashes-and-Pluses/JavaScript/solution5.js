function hashPlusCount(str) {
	var h=0, p=0;
	str.split("").map(x=> x === "#" ? h++ : p++)
	return [h,p]
}