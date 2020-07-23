/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let returnArray = [];
    for (const num of nums) {
        const index = returnArray.indexOf(num);
        if ( index === -1) {
            returnArray.push(num);
        } else {
            returnArray.splice(index, 1);
        }
    }
    return returnArray.filter( val => val!==undefined);
};

// console.log(singleNumber([1,2,1,,3,2,5]));//3, 5
// console.log(singleNumber([0,0,1,2])); //1, 2
module.exports = singleNumber;