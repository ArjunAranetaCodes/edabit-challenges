const afterNMonths = (year, months) =>
  months === undefined
    ? 'month missing'
    : year === undefined
    ? 'year missing'
    : Math.floor(year + months / 12);