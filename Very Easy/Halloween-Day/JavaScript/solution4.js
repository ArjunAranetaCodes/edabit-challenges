function halloween(dt) {
  return dt.getMonth() === 9 && dt.getDate() === 31
    ? "Bonfire toffee"
    : "toffee";
}