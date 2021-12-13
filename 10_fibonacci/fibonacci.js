const fibonacci = function(num) {
    let first = 1,
        second = 1,
        temp = 0;

    if (num < 0) return "OOPS";
    
    for (let i=2; i<num; i++) {
        temp = second;
        second += first;
        first = temp;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
