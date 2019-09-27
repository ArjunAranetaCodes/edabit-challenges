function distanceToNearestVowel(str) {
	let vowels = 'aeiou'.split('');
	let res = [], i = 0, min, a, b;
	str = str.split('');

	for(let s of str){
		if(vowels.includes(s)){
			min = 0;
		}else{
			a = checkLeft(vowels,str,i);
			b = checkRight(vowels,str,i);
			min = a < b ? a : b;
		}
		res.push(min);
		i++;
	}

	return res;
}

checkLeft = (vowels,str,i) => {
	i = i-1;
	j = 1;
	while(i >= 0){
		if(vowels.includes(str[i])){
			return j;
		}    
		j++;
		i--;
	}
	return Infinity;
}

checkRight = (vowels,str,i) => {
	i = i+1;
	j = 1;
	while(i < str.length){
		if(vowels.includes(str[i])){
			return j;
		}    
		j++;
		i++;
	}
	return Infinity;
}