const transformUpvotes = str =>
  str
    .split(' ')
    .map(num => (num.includes('k') ? parseFloat(num) * 1000 : Number(num)));