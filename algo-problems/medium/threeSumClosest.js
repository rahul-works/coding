/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let diff = Number.MAX_SAFE_INTEGER;
    let returnSum = 0;
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = 0; j < nums.length; j += 1) {
            for (let k = 0; k < nums.length; k += 1) {
                if (i !== j && j !== k && k !== i){
                    const sum3 = nums[i] + nums[j] + nums[k];
                    if (diff > Math.abs(target-sum3)) {
                        diff = Math.abs(target-sum3);
                        returnSum = sum3;
                        if (diff === 0) {
                            return target;
                        }
                    }
                }
            }
        }
    }
    return returnSum;
};

// console.log(threeSumClosest([-1,2,1,-4], 1)); // 2
// console.log(threeSumClosest([1,1,-1,-1,3], 3)); // 3
// console.log(threeSumClosest([0,0,0], 1)); // 0
// console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82)); // 82
module.exports = threeSumClosest;