function bitwiseAND(n1, n2) {
	n1 = n1.toString(2).split('').reverse();
	n2 = n2.toString(2).split('').reverse();
	return parseInt(n1.map((a,i) => Number(a) + Number(n2[i]) == 2 
			? '1' : 0).reverse().join(''), 2);

}
function bitwiseOR(n1, n2) {
	n1 = n1.toString(2).split('').reverse();
	n2 = n2.toString(2).split('').reverse();
	return n1.length >= n2.length ? parseInt(n1.map((a,i) => Number(a) == 1 || Number(n2[i]) == 1 
			? '1' : 0).reverse().join(''), 2) : parseInt(n2.map((a,i) => Number(a) == 1 || Number(n1[i]) == 1 
			? '1' : 0).reverse().join(''), 2);
}

function bitwiseXOR(n1, n2) {
	n1 = n1.toString(2).split('').reverse();
	n2 = n2.toString(2).split('').reverse();
	return n1.length >= n2.length ? parseInt(n1.map((a,i) => (Number(a) == 1 || Number(n2[i]) == 1) && Number(a) + Number(n2[i]) != 2 ? '1' : 0).reverse().join(''), 2) : parseInt(n2.map((a,i) => (Number(a) == 1 || Number(n1[i]) == 1) && Number(a) + Number(n1[i]) != 2 ? '1' : 0).reverse().join(''), 2);
}