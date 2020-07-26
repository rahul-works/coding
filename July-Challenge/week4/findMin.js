/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return Math.min(...nums);
};

console.log(findMin([1,3,5]));