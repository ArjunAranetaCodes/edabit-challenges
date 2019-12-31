const prices = {
	Strawberries: 1.50, Banana: 0.50, Mango: 2.50,
	Blueberries: 1.00, Raspberries: 1.00, Apple: 1.75,
	Pineapple: 3.50
}

class Smoothie {
	constructor(array){
		this.ingredients = array;
	}
	
	getCost(){
		var price = 0;
		for (var ndx = 0; ndx < this.ingredients.length; ndx++){
			price = price + prices[this.ingredients[ndx]]
		}
		price = "$"+price.toFixed(2);
		return price;
	}
	
	getPrice(){
		var ingPrice = parseFloat(this.getCost().replace("$",""));
		return "$" + (ingPrice + (ingPrice * 1.5)).toFixed(2);
	}
	
	getName(){
		var smoothieName = this.ingredients.map(x => x.replace("ies", "y")).sort();
		if(smoothieName.length > 1) return smoothieName.join(" ") + " Fusion";
		return smoothieName + " Smoothie";
	}
}