function FizzBuzz(num) {
	return (num%3?'':'Fizz')+(num%5?'':'Buzz')||`${num}`;
}