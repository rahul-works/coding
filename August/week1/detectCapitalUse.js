/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let firstU = -1;
    let restU = -1;
    for (const key in word) {
        if (key === '0' && word[key] === word[key].toUpperCase()) { // 1st uppercase
            firstU = 1;
        } else if (key === '0' && word[key] !== word[key].toUpperCase()) { // 1st lowercase
            firstU = 0;
            restU = 0;
        } else if (firstU === 1 && key > 0  && word[key] === word[key].toUpperCase()){ // rest uppercase
            restU = 1;
            firstU = -1;
        } else if (firstU === 1 && key > 0  && word[key] !== word[key].toUpperCase()){ // rest lowercase
            restU = 0;
            firstU = -1;
        }
        if (key > 0 && restU === 1 && word[key] !== word[key].toUpperCase()){
            return false;
        } else if (key > 0 && restU === 0 && word[key] === word[key].toUpperCase()){
            return false;
        }
        
    }
    return true;
};

// console.log(detectCapitalUse("USA"));
// console.log(detectCapitalUse("FLaG"));
// console.log(detectCapitalUse("Google"));
// console.log(detectCapitalUse("google"));
module.exports = detectCapitalUse;