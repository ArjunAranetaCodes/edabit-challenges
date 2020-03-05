function noOdds(arr) {
  return arr.filter(function(val){ return val % 2 === 0; })
}