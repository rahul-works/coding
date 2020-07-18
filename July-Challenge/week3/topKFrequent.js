/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = {};
    let returnArray = [];
    for (const num of nums) {
        if (count[num] === undefined) {
            count[num] = 1;
        } else {
            count[num] += 1;
        }
    }
    count = Object.entries(count).sort((a,b) => b[1] - a[1]);
    let i = 0;
    for( const num of count) {
        returnArray.push(parseInt(num[0]));
        i += 1;
        if (i === k) {
            return returnArray;
        }
    }
    return returnArray;
};

// console.log(topKFrequent([1,1,1,2,2,3], 2));


// console.log(topKFrequent([1]
//     , 1));
// console.log(topKFrequent([1, 2]
//     , 2));
// console.log(topKFrequent([4,1,-1,2,-1,2,3]
//     , 2));   
module.exports = topKFrequent;