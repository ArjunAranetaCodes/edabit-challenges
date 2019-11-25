function sayHelloBye (name, num) {
	return num ? "Hello "+ name.split("").map((x, i)=> i == 0 ? x.toUpperCase(): x).join(""):
					"Bye "+ name.split("").map((x, i)=> i == 0 ? x.toUpperCase(): x).join("");			
}