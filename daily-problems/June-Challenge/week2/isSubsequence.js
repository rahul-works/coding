/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s === '') {
        return true;
    }
    let subStringQueue = s.split('');
    console.log(subStringQueue);
    for (const char of t.split('')) {
        if (char === subStringQueue[0]) {
            subStringQueue.shift();
            console.log(subStringQueue);
            if (subStringQueue.length === 0) {
                return true;
            }
        }
    }
    return false;
};

module.exports = isSubsequence;
// console.log(isSubsequence("abc"
// , "ahbgdc"));
// console.log(isSubsequence(""
// , "ahbgdc"));