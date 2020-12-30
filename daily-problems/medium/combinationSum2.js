/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
let hash = {};
var combinationSum2 = function(candidates, target) {
    candidates = candidates.sort();
    let sum = 0;
    for (const num of candidates) {
        if (num < target && sum < target) {
            sum += num;
        }
        if (sum === target) {
            hash.push(sum);
        }
    }
    return hash;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8));