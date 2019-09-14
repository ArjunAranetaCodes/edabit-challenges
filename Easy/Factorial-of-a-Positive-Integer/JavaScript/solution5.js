function factorial(z) {
    let fact = 1;
    for (let i = 0 ; z-i>=1; i++){
        fact*=z-i;
    }
    return fact;
}