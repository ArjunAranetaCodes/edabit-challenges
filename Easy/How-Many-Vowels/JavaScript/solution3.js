function countVowels(str) {
  return str.split('').filter(x => 'aeiouAEIOU'.includes(x)).length;
}