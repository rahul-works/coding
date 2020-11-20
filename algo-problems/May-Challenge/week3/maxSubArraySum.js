/**
 * @param {number[]} A
 * @return {number}
 */

function kadane(A) {
    let localMax = A[0];
    let globalMax = A[0];
    for (const num of A) {
        localMax = Math.max(num, num+localMax);
        if (localMax > globalMax) {
            globalMax = localMax;
        }
    }
    return globalMax;
}
var maxSubarraySumCircular = function(A) {
    const oneWayMax   = kadane(A);
    console.log(oneWayMax);
    let otherWayMax = 0;
    for (const key in A) {
        otherWayMax += A[key];
        A[key] = -1 * A[key];
    }
    console.log(otherWayMax);
    console.log(kadane(A));
    otherWayMax = otherWayMax + kadane(A);
    console.log(otherWayMax);
    if (otherWayMax > oneWayMax && otherWayMax !== 0) {
        return otherWayMax;
    } else {
        return oneWayMax;
    }
};

console.log(maxSubarraySumCircular([5,-3,5]));