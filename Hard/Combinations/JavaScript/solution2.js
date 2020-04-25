function numInStr(arr) {
	return arr.filter(item => {
		for (char of item){
			if (char.charCodeAt(0)>47 && char.charCodeAt(0)<58){
				return item;
			}
		}
	})
}