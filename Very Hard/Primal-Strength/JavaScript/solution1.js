const isPrime = num => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

const primalStrength = num => {
  let min;
  let max;

  for (min = num - 1; !isPrime(min); min--) {}
  for (max = num + 1; !isPrime(max); max++) {}

  const deltaMin = Math.abs(num - min);
  const deltaMax = Math.abs(num - max);

  if (deltaMin === deltaMax) return 'Balanced';
  return deltaMin > deltaMax ? 'Strong' : 'Weak';
};