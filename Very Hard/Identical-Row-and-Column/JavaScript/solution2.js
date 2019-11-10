const getColumn = (arr, x) =>
  Array.from({ length: arr.length }, (_, y) => arr[y][x]);

const hasIdentical = arr => {
  const rows = arr.map(JSON.stringify);
  const cols = Array.from({ length: arr.length }, (_, x) =>
    JSON.stringify(getColumn(arr, x))
  );

  return cols.some(col => rows.includes(col));
};