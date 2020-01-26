function anotherFunc(callback) {
	let str = "bye"
	setTimeout(() => {
		callback(str)
	}, 100)
}

var doc = "hello"

function callback(str) {
	doc = str
}