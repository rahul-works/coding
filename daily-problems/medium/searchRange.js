/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length === 0) {
        return [-1, -1];    
    }
    let left = 0;
    let right = nums.length-1;
    let mid = Math.floor((right+left)/2);
    let start = -1;
    let end = -1;
    while (left < right && nums[mid] !== target) {
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((right+left)/2);
    }

    if (nums[mid] === target) {
        start = mid;
        end = mid ;
        while (nums[start] === target) {
            start--;
        } 
        while (nums[end] === target) {
            end++;
        } 
        start += 1;
        end -= 1; 
    } 
    return [start, end];
};

// console.log(searchRange([5,7,7,8,8,10], 8));
// console.log(searchRange([5,7,7,8,8,10],  6));
module.exports = searchRange;