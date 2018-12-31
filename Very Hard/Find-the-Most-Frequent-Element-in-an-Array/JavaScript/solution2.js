const findFrequent = arr => {
  const frequencyMap = arr.reduce(
    (map, curr) => map.set(curr, map.get(curr) + 1 || 1),
    new Map()
  );
  const sortedEntries = Array.from(frequencyMap).sort((a, b) => b[1] - a[1]);

  return sortedEntries[0][0];
};