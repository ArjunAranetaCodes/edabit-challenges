function largestSwap(num) {
	var newNum = num.toString();
	if (num >= newNum.charAt(1) + newNum.charAt(0)) return true;
	return false; 
}