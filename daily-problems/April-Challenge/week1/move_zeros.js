/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    console.log( nums.length);
    console.log( nums === undefined || nums.length === 0 || nums.length === 1);
    if (nums === undefined || nums.length === 0 || nums.length === 1) {
        return ;
    }
    let count = 0;
    for (const key in nums) {
        if (nums[key] !== 0) {
            if (nums[count]===0) {
                nums[count] = nums[key]+nums[count];
                nums[key] = nums[count] - nums[key];
                nums[count] = nums[count] - nums[key];
            }
            count += 1;
        }
    }
    console.log(nums);
};

// moveZeroes([0,1,0,3,12]);
// moveZeroes([1, 22]);
moveZeroes([1,0,1]);