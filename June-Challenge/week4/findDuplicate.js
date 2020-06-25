/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let hash = {};
    for ( const num of nums) {
        if (hash[num] === undefined) {
            hash[num] = 1;
        } else {
            return num;
        }
    }
};
module.exports = findDuplicate;
// console.log(findDuplicate([1,3,4,2,2]));
// console.log(findDuplicate([3,1,3,4,2]));