const prices = {
	Strawberries: 1.50, Banana: 0.50, Mango: 2.50,
	Blueberries: 1.00, Raspberries: 1.00, Apple: 1.75,
	Pineapple: 3.50
}

class Smoothie {
	constructor(ingredients) {    
    this.ingredients = ingredients;
		this.cost = this.ingredients.map((ing) => prices[ing]).reduce((a, c) => a + c)
  }
	getCost() {
		return "$" + this.cost.toFixed(2)
  }
	getPrice() {
    return "$" + (this.cost + this.cost * 1.5).toFixed(2);
  }
	getName() {
		let ings = this.ingredients.sort().map(function(x){ return x.replace("ies","y")}).join(" ")
		return this.ingredients.length == 1 ? ings + " Smoothie" : ings + " Fusion";
  }
}