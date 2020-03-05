const sum = function(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr.reduce((acc, cur) => acc + cur);
};