function greetPeople(names) {
	var newArr = []
	for(var x = 0; x < names.length; x++){
		newArr.push("Hello " + names[x])
	}
	return newArr.join(", ")
}