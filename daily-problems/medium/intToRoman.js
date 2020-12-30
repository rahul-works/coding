/**
 * @param {number} num
 * @return {string}
 */
let map = [
    [1000, 'M'], 
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9 , 'IX'],
    [5, 'V'],
    [4 , 'IV'],
    [1, 'I']
];
var intToRoman = function(num) {
    
    let roman = '';
    while (num > 0) {
        for (const val of map) {
            if (num>=val[0]) {
                num -= val[0];
                roman += val[1];
                break;
            }
        }
    }
    return roman;
};

// console.log(intToRoman(14)); // XIV
// console.log(intToRoman(20)); // XX
// console.log(intToRoman(40)); // XL
// console.log(intToRoman(80)); // LXXX
// console.log(intToRoman(3)); // III
// console.log(intToRoman(114)); // CXIV
// console.log(intToRoman(20)); // XX
module.exports = intToRoman;