/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    
    if (n === 0 || m === 0) {
        return 0;
    }
    
    let countShift=0;
    let start = m;
    let end = n;
    while (start < end){
        start = start>>1;
        end = end>>1;
        countShift += 1;
    }
    return start << countShift;
};