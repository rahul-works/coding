/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length-1] = digits[digits.length-1]+1;
    let i = 1;
    while ((digits[digits.length-i]).toString().length>1) {
        digits[digits.length-i] = 0;
        if (digits.length-i-1 >= 0) {
            digits[digits.length-i-1] = digits[digits.length-i-1]+1;
        } else {
            digits.unshift(1);
        }
        i += 1;
    }
    return digits;
};

// console.log(plusOne([1,2,3]));
// // Input: [1,2,3]
// // Output: [1,2,4]
// console.log(plusOne([4,3,2,1]));
// // Input: [4,3,2,1]
// // Output: [4,3,2,2]
// console.log(plusOne([9])); // [1, 0]
// console.log(plusOne([9,9]));
// console.log(plusOne([9,9,9]));
module.exports = plusOne;