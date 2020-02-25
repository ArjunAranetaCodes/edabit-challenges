function greetingMaker(name) {
	var salutation = "Hello"
	function closure(name) {
	  return salutation + ", " + name 	
	}
	return closure
}

var greeting = greetingMaker();