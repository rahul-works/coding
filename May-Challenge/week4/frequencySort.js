/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hashCount = {};
    for (const char of s) {
        if (hashCount[char] === undefined) {
            hashCount[char] = 1;
        } else {
            hashCount[char] += 1;
        }
    }
    
    let sortable = [];
    for (var key in hashCount) {
        sortable.push([key, hashCount[key]]);
        
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    let returnVal = '';
    for (const key in sortable) {
        if (sortable[key][1] > 1) {
            for (let i = 0; i < sortable[key][1]; i += 1) {
                returnVal += sortable[key][0];
            }
        } else {
            returnVal += sortable[key][0];
        }
    }
    return returnVal;
};
    
console.log(frequencySort("tree"));