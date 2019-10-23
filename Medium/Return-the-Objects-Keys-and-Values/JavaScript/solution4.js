function keysAndValues(obj) {
  var k = [];
  var o = [];
  for (var i in obj){
    k.push(i);
    o.push(obj[i]);
  }
  return [k,o];
}