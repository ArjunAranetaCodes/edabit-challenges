function testJackpot(result) {
	var ref = result[0]
	for(var x = 0; x < result.length; x++){
		if(result[x] !== ref){
			return false
		}
	}
	return true
}