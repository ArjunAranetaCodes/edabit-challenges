function skipTooMuchSugarDrinks(drinks) {
	for(i=0; i<drinks.length;i++){
		if(drinks[i]==='cola'||drinks[i]==='fanta'){
			drinks.splice(i,1);
			i--;
		}
		}
	return drinks;
}