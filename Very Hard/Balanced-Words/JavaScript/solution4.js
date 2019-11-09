function balanced(word) {
	word = word.length % 2 == 0 ? word : word.substring(0, (word.length/2)) + word.substring((word.length/2)+1)
	var partWord1 = word.substring(0,(word.length/2))
	var partWord2 = word.substring(word.length/2)
	
	var sum1, sum2 
	if(Array.isArray(getMapVal(partWord1)) && Array.isArray(getMapVal(partWord2))){
		sum1 = getArrSum(getMapVal(partWord1))
		sum2 = getArrSum(getMapVal(partWord2))
	}else{
		sum1 = getMapVal(partWord1)
		sum2 = getMapVal(partWord2)
	}
	
	return sum1 == sum2
}

function getArrSum(arr){
	var sum = 0;
	for(var x = 0; x < arr.length; x++){
		sum = sum + arr[x]
	}
	return sum
}

function getMapVal(str){
    var letterMap={
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
        l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
        u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    if(str.length== 1) return letterMap[str] || ' ';
    return str.split('').map(getMapVal);
}