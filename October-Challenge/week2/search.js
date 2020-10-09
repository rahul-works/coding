/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        console.log(left, mid, right);
        if (nums[mid] === target) {
            return mid;
        }
        if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};

// console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([2, 5], 5));
console.log(search([2, 3, 5], 5));