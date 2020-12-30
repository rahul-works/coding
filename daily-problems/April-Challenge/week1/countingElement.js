/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    if (arr === undefined || arr.length === 0 || arr.length > 1000) {
        return;
    }
    let countElements = 0;
    let uniqueNumber = Array();
    for (const num of arr){
        if (num < 0 || num > 1000) {
            return;
        }
        if (uniqueNumber[num] === undefined) {
            uniqueNumber[num] = num;
        }
    }
    for (const num of arr) {
        if (uniqueNumber[num+1]) {
            countElements += 1
        }
    }
    console.log(countElements);
    return countElements;
};

// countElements([1,2,3]);
// countElements([1,1,3,3,5,5,7,7]);
// countElements([1,3,2,3,5,0]);
countElements([1,1,2,2]);