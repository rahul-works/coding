/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let counter = 0;
    let sum;
    for (const key in nums ) {
        let sum = 0;
        for(let i = parseInt(key); i < nums.length; i += 1) {
            console.log(sum >= k);
            console.log(sum +' - '+ k);
            sum += nums[i];
            if (sum == k) {
                counter += 1;
                console.log('counter:'+counter);
            }
            console.log('i:'+i);
            console.log('nums:'+nums[i]);
            console.log('sum                            :'+sum);
        }
    }
    console.log(counter);
};

// subarraySum([1,1,1], 2);
// subarraySum([28,54,7,-70,22,65,-6], 100);
subarraySum([0,0,0,0,0,0,0,0,0,0], 0);