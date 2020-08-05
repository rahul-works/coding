/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let sumStr = function (a, b) {
    let len = Math.max(a.length, b.length);
    let tmpResult = '',
        rest = 0;
    for(let j = 0; j < len; j += 1) {
        let tI = a.length - 1 - j,
            pI = b.length - 1 - j;
        let sum = (a.charCodeAt(tI) - 48 || 0) + (b.charCodeAt(pI) - 48 || 0) + rest;
        rest = sum > 9 ? 1: 0
        tmpResult = sum % 10 + tmpResult;
    }
    return (rest || '') + tmpResult;
};


var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0'
    let a = '',
        multiplyer1 = '';
    for(let i = num1.length - 1; i >= 0; i -= 1) {
        let charNum1 = num1.charCodeAt(i) - 48;
        let tmpRes = '',
            remaining = 0;
        for(let j = num2.length - 1; j >= 0; j -= 1) {
            let charNum2 = num2.charCodeAt(j) - 48;
            let currChar = charNum2 * charNum1 + remaining;
            remaining = Math.floor(currChar / 10);
            tmpRes = currChar % 10 + tmpRes;
        }
        a = sumStr((remaining || '') + tmpRes + multiplyer1, a);
        multiplyer1 += '0';
    }
    return a;
};
// console.log(multiply("2", "3")); // "6"
// console.log(multiply("123", "456")) // 56088
console.log(multiply("123456789", "987654321")); // "121932631112635269"