/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s === undefined  || s.length === 0) {
        return -1;
    }
    if (s.length === 1) {
        return 0;
    }
    let countHash = {}
    for (const chr of s) {
        if(countHash[chr] === undefined) {
            countHash[chr] = 1;
        } else {
            countHash[chr] += 1;
        }
        lastChar = chr;
    }
    console.log(countHash);
    for (const key in s) {
        if (countHash[s[key]]===1) {
            return key;
        } 
    }
    return -1;
};

console.log(firstUniqChar("bd"));
console.log(firstUniqChar("dacca"));