function additivePersistence(n) {
	let count=0;
	while(String(n).length>1){
		n=[...String(n)].reduce((a, b)=>+a + +b);
		count++;
	}
	return count;
}

function multiplicativePersistence(n) {
	let count=0;
	while(String(n).length>1){
		n=[...String(n)].reduce((a, b)=>+a * +b);
		count++;
	}
	return count;
}