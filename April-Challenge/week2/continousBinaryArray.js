var findMaxLength = function(nums) {
    let map = [];
    map['0'] = -1;

    let maxSubArrrayCount=0, count = 0;
    if (nums === undefined ||nums.length < 2) {
        return maxSubArrrayCount;
    }
    for (let i = 0; i < nums.length; i += 1) {
        count = count + (nums[i] === 1 ? 1 : -1);
        if (map[count]!=undefined) {
            maxSubArrrayCount = Math.max(maxSubArrrayCount, i - map[count]);
        } else {
            map[count] = i;
        }
    }
    console.log(maxSubArrrayCount);
    return maxSubArrrayCount;
};

// findMaxLength([0,0,0, 1, 1, 1, 0]);
// findMaxLength([1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1]);
//findMaxLength([0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1]);
findMaxLength([0,0,1]);