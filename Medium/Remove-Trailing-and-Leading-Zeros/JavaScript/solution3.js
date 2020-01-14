const reverseAndNot = number => (
	+([...`${number}`].reverse().join("") + number)
);