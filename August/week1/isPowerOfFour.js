/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num < -2147483647) {
        return false;
    }
    if (num === 0) {
        return false; 
    }
    while (num !== 1) {  
        if (num % 4 !== 0) {
            return false; 
        }
        num = num / 4;  
    } 
    return true;
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(-240));