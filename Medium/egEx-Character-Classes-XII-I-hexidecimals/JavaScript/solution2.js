function anotherFunc(cb) {
  let str = "bye";
  setTimeout(cb, 100, "bye");
}

var doc = "hello";

function callback(str) {
  doc = str;
}