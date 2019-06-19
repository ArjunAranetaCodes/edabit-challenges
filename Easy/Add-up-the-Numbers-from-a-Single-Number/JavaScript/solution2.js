function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}