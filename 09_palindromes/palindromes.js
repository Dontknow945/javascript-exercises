const palindromes = function (str) {
    let newStr = str.match(/[a-zA-Z]/g).join('').toLowerCase();
    let len = newStr.length;
    for (let i=0; i<len/2; i++) {
        if (newStr.charAt(i) != newStr.charAt(len-1-i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
