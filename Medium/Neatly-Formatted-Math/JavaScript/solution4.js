function formatMath(expr) {
	var split = expr.split(' ');
	var res = 0;
	var num1 = parseInt(split[0]);
	var num2 = parseInt(split[2]);
	switch(split[1]) {
		case '+':
			res = num1 + num2;
			break;
		case '-':
			res = num1 - num2;
			break;
		case 'x':
			res = num1 * num2;
			break;
		case '/':
			res = num1 / num2;
			break;
	}
	return(`${split[0]} ${split[1]} ${split[2]} = ${res}`);
}