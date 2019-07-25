function additivePersistence(n) {
	var strBaseNum = n.toString();	
	var sum = 0;
	var count = 0;
	while(strBaseNum.length != 1){
		for(var x = 0; x < strBaseNum.length; x++){
			sum = sum + Number(strBaseNum[x]);		
		}
		count++;
		strBaseNum = sum.toString();
		sum = 0
	}	
	return count;
}

function multiplicativePersistence(n) {
	var strBaseNum = n.toString();	
	var prod = 1;
	var count = 0;
	while(strBaseNum.length != 1){
		for(var x = 0; x < strBaseNum.length; x++){
			prod = prod * Number(strBaseNum[x]);		
		}
		count++
		strBaseNum = prod.toString()
		prod = 1
	}	
	return count;
}