function intOrString(param) {
  if (typeof param === "number") {
    return "int";
  } else if (typeof param === "string") {
    return "str";
	}
}