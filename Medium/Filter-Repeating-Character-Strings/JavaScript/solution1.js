function identicalFilter(arr){
    return arr.filter((str) => new Set(str).size === 1)
}