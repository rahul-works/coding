/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    nums = nums.sort();
    let divisibleSubset = [];
    for( const num of nums) {
        divisibleSubset.push([num]);
    }
    console.log(divisibleSubset);
    for (const key in nums) {
        for (let i = 0; i < key; i += 1) {
            if (nums[key] % nums[i] === 0 && divisibleSubset[key].length < divisibleSubset[i].length+1) {
                let subset = divisibleSubset[i];
                subset.push(nums[key]);
                divisibleSubset[key] = subset;
            }
        }
    }
    console.log(divisibleSubset);
    return divisibleSubset.reduce((r,s) => r.length > s.length ? r : s, 0);
};

// console.log(largestDivisibleSubset([1,2,3]));
// console.log(largestDivisibleSubset([1,2,4,8]));
console.log(largestDivisibleSubset([4,8,10,240]));