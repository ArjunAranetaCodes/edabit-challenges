const byLength = (a, b) => b.length - a.length;

const getHashTags = str => {
  const words = str.match(/\w+/g);
  const result = [...words.slice(0, 3)].sort(byLength);

  words.slice(3).forEach(word => {
    if (result.some(({ length }) => length < word.length)) {
      result[2] = word;
      result.sort(byLength);
    }
  });

  return result.map(word => `#${word.toLowerCase()}`);
};