function toArray(obj) {
	var a = [];
	for(var i in obj){
		a.push([i,obj[i]]);
	}
	return a;
}const divisible = num => num % 100 === 0;