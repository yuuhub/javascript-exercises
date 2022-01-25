const sumAll = function(from, to) {
    let sum = 0;
    if(typeof from == "number" && typeof to == "number" && from > -1 && to > -1) {
        
        for(let i = Math.min(from, to); i <= Math.max(from, to); i++) {
            sum += i;
        }
    }
    else {
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
