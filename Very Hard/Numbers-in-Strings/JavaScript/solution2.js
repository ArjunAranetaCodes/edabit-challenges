function happy(n) {
  if (n === 1) return true;
  if (n >= 10) {
    return happy(
      n
        .toString()
        .split("")
        .reduce((a, c) => Math.pow(c, 2) + a, 0)
    );
  } else {
    return false;
  }
}