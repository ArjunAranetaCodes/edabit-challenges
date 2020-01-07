const styles = {b: "**", i: "_", c: "`", s: "~~"},
			mdFormat = (word, x) => styles[x] + word + styles[x];