class Smoothie {
	constructor(ingredients) { this.ingredients = ingredients }
	parse(price) { return +price.replace("$", "") }
	getCost() {
		const prices = {
			Strawberries: "$1.50", Banana: "$0.50", Mango: "$2.50",
			Blueberries: "$1.00", Raspberries: "$1.00", Apple: "$1.75",
			Pineapple: "$3.50"
		}
		return "$" + this.ingredients
			.map(v => this.parse(prices[v]))
			.reduce((a,b) => a + b, 0).toFixed(2);
	}
	getPrice() {
		let x = this.parse(this.getCost());
		return "$" + (x + (x * 1.5)).toFixed(2);
	}
	getName() {
		let x = this.ingredients.sort()
			.map(w => w.replace(/(\w+)(ies)\b/g, "$1y")); 
		return x.join(" ") + (x.length > 1 ? " Fusion" : " Smoothie")
	}
}