/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if (nums.length === 0) {
        return -1;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if(nums.length === 2) {
        if (nums[0] !== nums[1]) {
            return nums[0];
        } else {
            return -1;
        }
    }
    let left    = 0; 
    let right   = nums.length-1;
    let middle  = (right - left) / 2;
    //boundary condition check 
    if (nums[left] !== nums[left+1]) {
        return nums[left];
    }
    if (nums[right] !== nums[right-1]) {
        return nums[right];
    }
    // binary search
    while (left + 1  < right) {
        console.log(left+', '+middle+', '+right);
        if (nums[middle-1] !== nums[middle] && nums[middle] !== nums[middle+1]) {
            return nums[middle];
        }
        if (middle % 2 === 0) { // even
            if (nums[middle] === nums[middle-1]) { //go left
                right   = middle;
            } else { // go right
                left   = middle;
            }
        } else { // odd
            if (nums[middle] === nums[middle-1]) { //go right
                left   = middle;
            } else { // go left
                right   = middle;
            }
        }
        middle  = left + Math.floor((right-left) / 2);
    }
    return -1;
};

// console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));