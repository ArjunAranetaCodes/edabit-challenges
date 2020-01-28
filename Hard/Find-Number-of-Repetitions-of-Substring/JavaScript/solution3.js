function numberOfRepeats(str) {
	for (let i=1;; i++)
		if (str.replace(new RegExp(str.substring(0,i),"g"),"")=="")
			return str.length/i;
}