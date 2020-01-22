function formatPhoneNumber(numbers) {
  let arr = "(XXX) XXX-XXXX".split('');
  numbers.forEach(n => {
    arr[arr.indexOf('X')] = n;
  });
  return arr.join('');
}