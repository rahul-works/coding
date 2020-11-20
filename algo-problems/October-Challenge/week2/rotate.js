/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (let j = 0; j < k; j++) {
        let temp = nums[nums.length - 1];
        for (let i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = temp;
    }
    return nums;
};