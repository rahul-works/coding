/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleNumber;
    let hash = {};
    for (const num of nums) {
        if (hash[num] === undefined) {
            hash[num] = 1; 
            singleNumber = num;
        } else {
            hash[num] = 2; 
            singleNumber = null;
        }
    }
    if (singleNumber === null) {
        for ( const key in hash) {
            if (hash[key] === 1) {
                return key;
            }
        }
    }
    return singleNumber;
};
module.exports = singleNumber;
// console.log(singleNumber([2,2,3,2]));
// console.log(singleNumber([0,1,0,1,0,1,99]));
// console.log(singleNumber([43,16,45,89,45,-2147483648,45,2147483646,-2147483647,-2147483648,43,2147483647,-2147483646,-2147483648,89,-2147483646,89,-2147483646,-2147483647,2147483646,-2147483647,16,16,2147483646,43]));
// 2147483647