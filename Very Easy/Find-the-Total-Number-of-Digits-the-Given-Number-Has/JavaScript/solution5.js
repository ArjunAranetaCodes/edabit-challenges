function countClaps(txt) {

  const re = /C/g;
  return ((txt || '').match(re) || []).length;

}