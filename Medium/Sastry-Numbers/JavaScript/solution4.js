function isSastry(number) {
	if(number !== undefined){
		let successor = parseInt(number) + 1;
		let strNewNum = number.toString() + successor.toString();
		if((Math.sqrt(parseInt(strNewNum)) > 0) && 
			 Math.sqrt(parseInt(strNewNum)) % 1 === 0){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}