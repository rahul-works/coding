/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let hashCount = {};
    for (const num of nums) {
        if (hashCount[num] === undefined) {
            hashCount[num] = 1;
        } else {
            hashCount[num] += 1;
        }
    }
    console.log(hashCount);
    let i = 0;
    for (const key in hashCount) {
        while (hashCount[key] !== 0) {
            nums[i] = parseInt(key);
            i += 1;
            hashCount[key] -= 1;
        }        
    }
    return nums;
};
module.exports = sortColors;
// console.log(sortColors([2,0,2,1,1,0]));