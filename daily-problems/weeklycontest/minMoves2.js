/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    if (n < 2) {
        return 0;
    }
    let arr = [];
    for (let i = 0; i<n; i++) {
        arr[i] = 2*i+1;
    }
    let i = 0;
    let j = n-1;
    let moves = 0;
    
    while (i < j) {
        moves += arr[j--] - arr[i++];        
    }
    return moves/2;
};