const sumAll = function(a, b) {
    if( a < 1 | b < 1) return "ERROR";
    if(!Number.isInteger(a) | !Number.isInteger(b)) return "ERROR";
    let sum = 0;
    
    if(a > b){
        let pivot = a;
        a = b
        b = pivot
    }

    for (i = a; i <= b; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
