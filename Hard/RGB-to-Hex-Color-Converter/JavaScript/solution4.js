function rgbToHex(col) {
	var rgbValues = col.substring(4, col.length - 1)
	var arrValues = rgbValues.split(",")
	var hexStr = ""
	for(var x = 0; x < arrValues.length; x++){
		var hex = Number(arrValues[x]).toString(16);
		if (hex.length < 2) {
				 hex = "0" + hex;
		}
		hexStr = hexStr + hex
	}
	return "#" + hexStr
}