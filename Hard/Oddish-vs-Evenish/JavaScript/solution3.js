function oddishOrEvenish(num) {
var sum = 0;

while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
}
	if(sum % 2 == 0){ return 'Evenish';}
	else { return 'Oddish';}
}