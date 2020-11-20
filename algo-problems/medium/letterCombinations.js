/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {'2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'] };
    let returnCom = [];
    for (const num of digits) {
        if (map[num] !== undefined) {
            if (returnCom.length === 0) {
                for (const chr of map[num]) {
                    returnCom.push(chr);
                }
            } else {
                let tempReturnCom = [];
                for (const chr of returnCom) {
                    for (const nchr of map[num]) {
                        tempReturnCom.push(chr+nchr);
                    }   
                }
                returnCom = [...tempReturnCom];
            }
        }
    }
    return returnCom;
};

module.exports = letterCombinations;
// console.log(letterCombinations("23")); //[
//     'ad', 'ae', 'af',
//     'bd', 'be', 'bf',
//     'cd', 'ce', 'cf'
//   ]
