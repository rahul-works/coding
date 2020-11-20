/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        num = num%10+ parseInt(num/10);
    }
    return num;
};

// console.log(addDigits(38));
module.exports = addDigits;