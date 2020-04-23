const filterStateNames = (arr, type) => type === "abb" ?
arr.filter(x => x.length === 2) : arr.filter(x => x.length > 2);