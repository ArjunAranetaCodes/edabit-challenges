function greetPeople(names) {
	let finalString = "";
	names.forEach(name =>{
		finalString += "Hello " + name + ", ";
	})
	return finalString.slice(0, finalString.length - 2)
}