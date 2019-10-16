function boomIntensity(n) {
	var newBoom = ""
	if(n > 1){
		newBoom = newBoom + ("B" + "o".repeat(n) + ((n % 2 == 0) ? "m!" : "m"))
		if(n % 5 == 0) {newBoom = newBoom.toUpperCase()}
	}else{
		newBoom = "boom"
	}
	return newBoom
}