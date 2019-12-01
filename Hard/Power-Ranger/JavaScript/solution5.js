const getPowers = n => Array.from({ length: 10 }, (_, i) => Math.pow(i + 1, n));

const powerRanger = (power, min, max) => {
  const powers = getPowers(power);
  return powers.filter(power => power >= min && power <= max).length;
};