/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {

    if (k === 0) {
        return edgeCase(nums);
    }
    let count = 0;
    let set = new Set(nums);
    for (const num of set) {
        const target = num + k;
        if (set.has(target))
            count++;
    }
    return count;
};

function edgeCase(nums) {
    let count = {},
        res = 0;
    for (const num of nums) {
        count[num] = count[num] || 0;
        count[num]++;
        if (count[num] === 2) {
            res++;
        }
    }
    return res;
}

console.log(findPairs([3, 1, 4, 1, 5], 2));