/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0; 
    let right = s.length-1;
    while (left < right) {
        const swap = s[left];
        s[left] = s[right];
        s[right] = swap
        left += 1;
        right -= 1;
    }
    return s;
};

module.exports = reverseString;
// console.log(reverseString(["h","e","l","l","o"]));