class Smoothie {

	constructor(ingredients){
		this.ingredients = ingredients
	}
	
	getCost() {
		var ingPrice = new Map([
			['Strawberries',	1.50],
			['Banana',	0.50],
			['Mango',	2.50],
			['Blueberries',	1.00],
			['Raspberries',	1.00],
			['Apples',	1.75],
			['Pineapple',	3.50]
		]);
		var sum = 0.0
		for(var x = 0; x < this.ingredients.length; x++){
			var strIng = this.ingredients[x] === "Apple" ? "Apples" : this.ingredients[x]
			sum = sum + ingPrice.get(strIng)
		}
		return "$" + sum.toFixed(2)
  }
	
	getPrice() {
		var cost = parseFloat(this.getCost().toString().substring(1))
		return "$" + parseFloat(cost + cost * 1.5).toFixed(2)
  }
	
	getName() {
		
		if(this.ingredients.length == 1){
			if(this.ingredients[0].includes("berries")){
				var strIng = this.ingredients[0].substring(0, this.ingredients[0].indexOf("berries")) + "berry"
				return strIng + " Smoothie"
			}
			else{
				return this.ingredients[0] + " Smoothie"
			}
			
		}else if(this.ingredients.length > 1){
			var newStr = ""
			var ingList = this.ingredients.sort()
			for(var x = 0; x < ingList.length; x++){
				if(ingList[x].includes("berries")){
					var strIng = ingList[x].substring(0, ingList[x].indexOf("berries")) + "berry"
					newStr = newStr + strIng + " "
				}else{
					newStr = newStr + ingList[x] + " "
				}
			}
			
			return newStr.trim() + " Fusion"
		}
  }
	
	
}