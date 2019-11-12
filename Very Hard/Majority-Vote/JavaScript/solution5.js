const frequencyMap = arr =>
  arr.reduce((map, item) => map.set(item, map.get(item) + 1 || 1), new Map());

const majorityVote = arr => {
  if (!arr.length) return null;

  const [[letter, amount], second] = Array.from(frequencyMap(arr))
    .sort(([, a], [, b]) => b - a)
    .slice(0, 2);

  return second && amount === second[1] ? null : letter;
};