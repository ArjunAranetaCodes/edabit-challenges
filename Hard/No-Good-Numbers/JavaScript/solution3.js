function howBad(num) {
	var binary = num.toString(2).split("")
	var rep = []
	
	var sum = 0
	for(var x = 0; x < binary.length; x++){
		sum = sum + parseInt(binary[x])
	}
	
	if(sum % 2 == 0){
		rep.push("Evil")
	}else{
		rep.push("Odious")
	}
	
	if(isPrime(sum)) rep.push("Pernicious")
	return rep
}

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}