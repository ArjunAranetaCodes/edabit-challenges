function getWord(left, right) {
	return left.replace(/^[a-z]/,function($0){
		return $0.toUpperCase();
	}) + right;
}