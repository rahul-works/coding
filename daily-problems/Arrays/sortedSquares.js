/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    A = A.map(e => e*e);
    for (let i = 0; i < A.length-1; i++) {
        let min = i;
        for (let j = i; j < A.length; j++) {
            if (A[min] > A[j]) {
                min = j;
            }
        }
        if (min !== i) { //5, 3
            A[min] = A[i]-A[min]; // 2
            A[i] = A[i] - A[min]; //3
            A[min] = A[i] + A[min]; 
        }
    }
    return A;
};