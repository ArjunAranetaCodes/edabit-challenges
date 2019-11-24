function sayHelloBye (name, num) {
	name = name[0].toUpperCase() + name.slice(1);

	return num === 1 ? `Hello ${name}` : `Bye ${name}`;
}