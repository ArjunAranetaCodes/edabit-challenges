const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const howBad = num => {
  const ones = (num.toString(2).match(/1/g) || []).length;
  return [ones % 2 === 0 ? 'Evil' : 'Odious'].concat(
    isPrime(ones) ? 'Pernicious' : []
  );
};