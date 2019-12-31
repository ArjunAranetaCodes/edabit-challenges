const prices = {
  Strawberries: 1.50, Banana: 0.50, Mango: 2.50,
  Blueberries: 1.00, Raspberries: 1.00, Apple: 1.75,
  Pineapple: 3.50
}

class Smoothie {
  constructor(ingredients) {
    this.ingredients = ingredients;
    this.cost = ingredients.reduce((sum, ingredient) => sum + prices[ingredient], 0);
  }

  getCost() {
    return `$${this.cost.toFixed(2)}`;
  }

  getPrice() {
    return `$${(this.cost * 2.5).toFixed(2)}`;
  }

  getName() {
    if (this.ingredients.length === 1) return `${this.ingredients[0].replace("berries", "berry")} Smoothie`;
    return `${this.ingredients.map(ingredient => ingredient.replace("berries", "berry")).sort().join(" ")} Fusion`;
  }
}