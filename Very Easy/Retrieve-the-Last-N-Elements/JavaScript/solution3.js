function last(a, n) {
	var arrNew = []
	if(n > a.length) return "invalid"
	for(var x = (a.length - n); x < a.length; x++){
			arrNew.push(a[x])
	}
	return arrNew;
}