function createHash(str){
	return crypto.createHash("sha256").update(str).digest("hex");
}
function hashOps(arr) {
	let str= createHash(arr.join(""));
	return createHash([...str].filter(v=>v>"9").concat([...str].filter(v=>v<="9")).join(""));
}