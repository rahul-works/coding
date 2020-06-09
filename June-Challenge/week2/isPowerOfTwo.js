/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let count = 0;
    let powerOf2 = Math.pow(2, count);
    while (powerOf2 < n) {
        count += 1;
        powerOf2 = Math.pow(2, count);
    }
    if (powerOf2 === n) {
        return true;
    } else {
        return false;
    }
};

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(218));
module.exports = isPowerOfTwo;