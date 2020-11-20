/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let countHash = {}
    for (const num of nums) {
        if (countHash[num] === undefined) {
            countHash[num] = 1;
        } else {
            countHash[num] += 1;
        }
        if (countHash[num] >= nums.length/2) {
            return num;
        }
    }
    return -1;
};
console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
