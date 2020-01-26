function anotherFunc(cb) {
	let str = "bye"
	setTimeout(() => {
		cb(str)
	}, 100)
}

var doc = "hello"

function callback(str) {
	doc = str
}