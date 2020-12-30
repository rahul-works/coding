/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    jump = 0;
    for ( const index in nums) {
        if (index > jump) {
            return false;
        }
        jump = Math.max(jump, Number(index)+Number(nums[index]));
        console.log(jump);
    }
    return true;
}; 

// console.log(canJump([2,3,1,1,4]));
// console.log(canJump([2,0, 2]));
// console.log(canJump([2,0]));
console.log(canJump([3,2,1,0,4]));