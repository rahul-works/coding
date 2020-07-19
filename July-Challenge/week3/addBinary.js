/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let len;
    if (a.length > b.length) {
        len = a.length;
        while (a.length !== b.length) {
            b = '0'+b;
        }
    } else {
        len = b.length;
        while (a.length !== b.length) {
            a = '0'+a;
        }
    }
    let result = '';
    let carry = '';
    for (let i = len-1; i > -1; i -= 1) {
        if (a[i] !== undefined || b[i] !== undefined) {
            if (a[i] === b[i] && a[i] === '1') {
                if (carry === '1'){
                    result = '1'+result;
                } else {
                    result = '0'+result;
                    
                }
                carry = '1';
            } else if (a[i] === b[i] && a[i] === '0') {
                if (carry === '1') {
                    result = '1'+result;
                } else {
                    result = '0'+result;
                }
                carry = '0';
            } else {
                if (carry === '1') {
                    result = '0'+result;
                    carry = '1';
                } else {
                    result = '1'+result;
                    carry = '0';
                }
            }
        }
    }
    if (carry === '1') {
        result = '1'+result;
    }
    return result;
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("11", "1"));
console.log(addBinary("100", "110010"));