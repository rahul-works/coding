/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewelCount = 0;
    for (const stone of S) {
        if (J.indexOf(stone)>-1) {
            jewelCount += 1;
        }
    }
    return jewelCount;
};