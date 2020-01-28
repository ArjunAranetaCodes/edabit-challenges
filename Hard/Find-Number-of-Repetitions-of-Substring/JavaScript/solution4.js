function rootDigit(n) {
    let sum = eval(String(n).split('').join('+'))
    if(String(n).split('').length > 1){
        return rootDigit(sum)
    }else{
        return sum;
    }
}