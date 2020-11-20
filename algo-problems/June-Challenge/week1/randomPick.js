/*
 * @param {number[]} w
 */
let prefixSum = [];
let totalSum = 0;
var Solution = function(w) {
    let sum = 0;
    prefixSum = [];
    totalSum = 0;
    for (const weight of w) {
        sum += parseInt(weight);
        prefixSum.push(sum);
    }
    totalSum = sum;
    return this;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let randomSum = totalSum * Math.random();
    let low = 0;
    let high = prefixSum.length;
    while (low < high) {
        let mid = low + (high-low)/2;
        if (randomSum > prefixSum[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};

let solnObj = new Solution([[1]]);
console.log(solnObj.pickIndex());