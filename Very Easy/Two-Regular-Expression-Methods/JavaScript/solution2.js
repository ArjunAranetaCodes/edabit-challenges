const twoMethods = (re = /hello/) => {
	return re.exec("hello")[0] === "hello" && re.test("hello");
}