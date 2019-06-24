function calculateExponent(num, exp) {
 	return exp > 1 ? num * calculateExponent(num, exp - 1) :  num;
}