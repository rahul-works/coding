/**
 * @param {string} str
 * @return {number}
 */
const INT_MIN = -2147483648;
const INT_MAX = 2147483647;
var myAtoi = function(str) {
    
    let retNum = '';
    for (const chr of str) {
        if (chr !== ' ') {
            if (chr === '+' || chr === '-' || (parseInt(chr) >= 0 && parseInt(chr) <= 9)) {
                if ((retNum === '+' && chr === '-') || (retNum === '-' && chr === '+') 
                        || (retNum === '+' && chr === '+') || (retNum === '-' && chr === '-')) {
                    break;
                }
                retNum += chr;
            } else {
                break;
            }
        } else {
            if (retNum !== '') {
                break;
            }
        } 

    }
    if (retNum==='' || retNum==='+' || retNum==='-'){
        retNum = 0;
    } else {
        if (parseInt(retNum) < INT_MIN) {
            retNum = INT_MIN;
        } else if (parseInt(retNum) > INT_MAX){
            retNum = INT_MAX;
        } else {
            retNum = parseInt(retNum);
        }
    }
    
    return retNum;
};

// console.log(myAtoi("42"));
// console.log(myAtoi("   -42"));
// console.log(myAtoi("4193 with words"));
// console.log(myAtoi("words and 987"));
// console.log(myAtoi("-91283472332"));
// console.log(myAtoi("+"));
// console.log(myAtoi("+-2"));
// console.log(myAtoi("   +0 123"));
// console.log(myAtoi("2147483648"));
// console.log(myAtoi(" ++c"));
module.exports = myAtoi;