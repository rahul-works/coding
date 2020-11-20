const reverseBits = require("../week2/reverseBits");

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(' ');
    let reverse = [];
    let count = 0;
    for (let key = s.length-1; key >= 0; key -= 1) {
        if (s[key] !== ''){
            reverse[count] = s[key];
            count += 1;
        }
    }
    return reverse.join(' ');
};

// console.log(reverseWords("the sky is blue"));
// console.log(reverseWords("  hello world!  "));
// console.log(reverseWords("a good   example"));
module.exports = reverseWords;