/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let dsubsets = [];
let current = [];
var subsets = function(nums) {
    dsubsets = [];
    generateSubset(0, nums);
    return dsubsets;
};

function generateSubset(index, nums) {
    dsubsets.push(current);
    for (let i = index; i < nums.length; i += 1) {
        current.push(nums[i]);
        generateSubset(index+1, nums);
        current.pop();
    }
}
console.log(subsets([1,2,3]));
module.exports = subsets;