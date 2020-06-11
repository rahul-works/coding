/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for( const key in nums) {
        if (nums[key] >= target) {
            return key;
        } 
    }
    return nums.length;
};

module.exports = searchInsert;
// console.log(searchInsert([1,3,5,6],5));
    // console.log(searchInsert([1,3,5,6],7));