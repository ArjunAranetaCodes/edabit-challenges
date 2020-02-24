function formatMath(expr) {
	var newExpr = expr.replace("x", "*")
	return expr + " = " + eval(newExpr).toString()
}