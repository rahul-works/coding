/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let hash = {} ;
    let retArr = [];
    for (const num of nums) {
        if (hash[num] === undefined) {
            hash[num] = 1;
        } else {
            retArr.push(num);
        }
    }
    return retArr;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));