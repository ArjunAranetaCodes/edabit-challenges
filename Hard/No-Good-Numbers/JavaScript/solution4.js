function isPrime(num) {
	if (num < 2) {
    return false
  }

  for (var i=2; i<num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function howBad(num) {
	var result = [];
	var binary = num.toString(2);
	var num1s = binary.match(/1/g).length;

	if (num1s % 2 === 0){
		result.push("Evil");
	}
	else {
		result.push("Odious");
	}
	
	if (isPrime(num1s)){
		result.push("Pernicious");
	}
	
	return result;
}