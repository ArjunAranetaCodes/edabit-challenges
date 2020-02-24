function formatMath(expr) {
	return `${expr} = ${eval(expr.replace("x", "*"))}`
}