function greetingMaker(salutation) {
	return function closure(name) {
	  return salutation + ", " + name 	
	}
}