function formatPhoneNumber(numbers) {
   return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}