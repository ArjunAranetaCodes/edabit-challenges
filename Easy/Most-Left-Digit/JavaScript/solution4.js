function leftDigit(num) {
  return +num.split("").find(function(e) {
    return !isNaN(e);
  });
}