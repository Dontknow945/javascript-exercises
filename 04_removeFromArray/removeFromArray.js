const removeFromArray = function(arr, ...remove) {
    for (let i=0; i<remove.length; i++) {
        let index = arr.findIndex(ind => ind === remove[i]);
        if (index >= 0) {
            arr.splice(index,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
