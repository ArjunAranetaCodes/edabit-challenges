const uncensor = (str, vowels) => {
  const arr = vowels.split('');
  return str.replace(/\*/g, () => arr.shift());
};