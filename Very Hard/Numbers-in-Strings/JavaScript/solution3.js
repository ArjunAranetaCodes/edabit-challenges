function getHashTags(str) {
	var newArr = str.split(" ").sort(function(a, b){
		return b.length - a.length;
	});
	
	newArr = addHashtag(newArr)
	
	if(newArr.length < 3){
		return newArr;
	}
	return [newArr[0], newArr[1], newArr[2]]
}

function addHashtag(arr){
	var newArr = []
	for(var x = 0; x < arr.length; x++){
		var word = "#" + arr[x].toLowerCase().replace(/[^a-zA-Z ]/g, "")
		newArr.push(word)
	}
	return newArr
}