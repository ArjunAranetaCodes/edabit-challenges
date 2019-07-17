const clearFog = string => {
	return /[fog]/gi.test(string)
		? string.replace(/[fog]/gi, "")
		: "It's a clear day!";
}