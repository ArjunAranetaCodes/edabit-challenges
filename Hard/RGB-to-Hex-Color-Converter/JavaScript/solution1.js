const rgbToHex = color => {
	return "#" + color
		.match(/\d+/g)
		.map(v => (+v).toString(16).padStart(2, "0"))
		.join("");
}