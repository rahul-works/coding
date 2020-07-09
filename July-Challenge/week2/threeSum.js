/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort();
    let res = []
    let length = nums.length;
    for (let i = 0;  i <=length-2; i +=1) {
        if (nums[i]>0) {
            break;
        }
        if (i>0 && nums[i]==nums[i-1]){
            continue;
        } 

        let l =i+1, r = length-1;
        while (l<r) {
            total = nums[i]+nums[l]+nums[r];
            if (total<0){
                l+=1;
            } else if (total>0) {
                r-=1;
            } else {
                res.push([nums[i], nums[l], nums[r]])
                while (l<r && nums[l]==nums[l+1]) {
                    l+=1
                }
                while (l<r && nums[r]==nums[r-1]){
                    r-=1;
                }
                    
                l += 1;
                r -= 1;
            }
        }       
    }
    return res;
};

// console.log(threeSum([-1,0,1,2,-1,-4]));
module.exports = threeSum;