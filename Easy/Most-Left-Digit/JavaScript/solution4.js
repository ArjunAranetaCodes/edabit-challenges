function sortDescending(num) {
  const numbers = [...num + ''].sort().reverse().join('');
  return parseInt(numbers, 10);
}