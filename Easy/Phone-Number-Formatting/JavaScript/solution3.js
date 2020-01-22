function formatPhoneNumber(numbers) {
  let masked = '(###) ###-####';
  numbers.forEach(v => masked = masked.replace("#", v));
  return masked;
}