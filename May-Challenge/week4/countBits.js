/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let returnOnesArray = [0];
    for (let count = 1; count <= num; count += 1) {
        returnOnesArray.push(returnOnesArray[count>>1] + parseInt(count & 1));
    }
    return returnOnesArray;
};

// console.log(countBits(2));
console.log(countBits(5));