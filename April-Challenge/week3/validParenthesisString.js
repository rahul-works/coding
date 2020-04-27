/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    if (s === undefined) {
        return 'Invalid Type';
    }
    if (s.length === 0  || s == '*') {
        return true;
    }

    if (s.length === 1 ) {
        return false;
    }
        
    const pString = s.split('');
    let balanceCount = 0;
    for (const val of pString) {
        if (val === '(' || val === '*') {
            balanceCount += 1;
        } else if (val === ')') {
            balanceCount -= 1;
        }
        if (balanceCount < 0) {
            return false;
        }
    }
    if (balanceCount == 0) {
        return true;
    }
    balanceCount = 0;
    for (const val of pString.reverse()) {
        if (val === ')' || val === '*') {
            balanceCount += 1;
        } else if (val === '(') {
            balanceCount -= 1;
        }
        if (balanceCount < 0) {
            return false;
        }
    }
    return true;
};

// checkValidString('');
// checkValidString("()");
console.log(checkValidString("(*)"));
console.log(checkValidString("(*)))"));