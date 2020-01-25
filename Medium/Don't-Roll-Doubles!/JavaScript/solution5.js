function filterUnique(arr){
    return arr.filter((str) => {
        return str.length === new Set(str).size
    })
}