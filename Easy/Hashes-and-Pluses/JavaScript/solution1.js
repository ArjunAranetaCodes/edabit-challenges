const hashPlusCount = str => [
  (str.match(/#/g) || []).length,
  (str.match(/\+/g) || []).length,
];