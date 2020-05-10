function integerBoolean(n) {
	result = [];
	
	for (i = 0; i < n.length; i++){
		result.push(n[i]==1);
	}
	return result;
}