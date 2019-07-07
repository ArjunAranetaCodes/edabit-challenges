let promise = new Promise( (resolve) => {
	let animal = "cat"
  setTimeout(() => {
		if(animal === "dog") {
			resolve("It's a dog!")
		} 
	  if(animal !== "dog") {
			reject("It's not a dog!")
		}
  }, 1000)
})