let promise = new Promise( (resolve) => {
	let animal = "cat"
  setTimeout(() => {
		if(animal === "dog") {
			resolve("It's a dog!")
		} 
	  if(animal !== "dog") {
			/* need something here, you might also need to pass
			something else besides the resolve callback */
			reject("oops!");
		}
  }, 1000)
})