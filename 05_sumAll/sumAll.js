const sumAll = function(start, end) {

    if (start > end) {
        let temp = 0;
        temp = start;
        start = end;
        end = temp;
    }

    if ((start < 1 || end < 1) || !Number.isInteger(start) || !Number.isInteger(end) ){
        return "ERROR"
    }

    let sum = 0;

    for (let i = start; i < end + 1; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
