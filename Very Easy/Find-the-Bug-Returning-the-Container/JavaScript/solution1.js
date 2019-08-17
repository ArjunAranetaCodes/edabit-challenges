function getContainer(product) {
  switch (product) {
		case "Bread": return "bag";
		case "Beer":
		case "Milk": return "bottle";
		case "Cerials": return "box";
		case "Eggs": return "carton";
		case "Candy": return "plastic";
		default: return null;
	}
}