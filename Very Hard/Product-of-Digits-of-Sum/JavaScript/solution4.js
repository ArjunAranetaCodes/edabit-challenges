let prod = n => n < 10 ? n : prod(+String(n).split('').reduce((a,b)=>a*b));
let sumDigProd = (...arr) => prod(arr.reduce((a,b)=>a+b));