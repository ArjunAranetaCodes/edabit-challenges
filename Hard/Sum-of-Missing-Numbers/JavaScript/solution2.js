function findBrokenKeys(str1, str2) {
	let brokenSet=new Set();
	for(let i=0;i<str1.length;i++){
		if(str1[i]!==str2[i]){
			brokenSet.add(str1[i]);
		}
	}
	return [...brokenSet];
}