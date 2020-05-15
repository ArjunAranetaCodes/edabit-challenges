function afterNMonths(year, months) {
  return !year
    ? "year missing"
    : !months
    ? "month missing"
    : year + Math.floor(months / 12);
}