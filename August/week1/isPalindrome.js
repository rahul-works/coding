/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) {
        return true;
    }
    let sanatize = '';
    let letterNumber = /^[0-9a-zA-Z]+$/;
    for (const chr of s) {
        if (chr.match(letterNumber)) {
            sanatize += chr.toLowerCase();
        }
    }
    if (sanatize.length === 0 || sanatize.length === 1) {
        return true;
    }
    let half = sanatize.substr(0, Math.floor(sanatize.length/2));
    let otherHalf = '';
    if (half.length*2 < sanatize.length) {
        otherHalf = sanatize.substr(half.length+1);
    } else {
        otherHalf = sanatize.substr(half.length);
    }
    console.log(half.length);
    console.log(otherHalf.length);
    return half.length>0 ?half.split('').reverse().join('') === otherHalf: false;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(isPalindrome("race a car"));// false 
console.log(isPalindrome("0P"));// false;
console.log(isPalindrome(" "));// false;
console.log(isPalindrome("a."));// true;
