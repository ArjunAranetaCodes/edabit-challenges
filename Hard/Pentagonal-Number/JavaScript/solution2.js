function pentagonal(num) {
var numOfCir = num;
    var circle = 0;
    if(numOfCir == 1){
        return 1;
    }
    while(numOfCir > 1){
        circle += numOfCir+(3*(numOfCir-1))+numOfCir-2 
        numOfCir -=1
        if(numOfCir == 1){
            circle+=1
        } 
    }
    return circle
}