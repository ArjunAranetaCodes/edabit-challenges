https://edabit.com/challenge/dLfz4nn5GYL8cLsGM

RGB to Hex Color Converter

Create a function that converts color in RGB format to Hex format.

Examples
rgbToHex("rgb(0, 128, 192)") ➞ "#0080c0"

rgbToHex("rgb(45, 255, 192)") ➞ "#2dffc0"

rgbToHex("rgb(0, 0, 0)") ➞ "#000000"
Notes
The Hex format should be displayed in lowercase.

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