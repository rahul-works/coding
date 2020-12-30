/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
    const lenA = A.length;
    const lenB = B.length;
    let dp = Array(lenA+1).fill().map(() => Array(lenB+1).fill(0));
    for (let row in A) {
        for (let col in B) {
            if (A[row] === B[col]) {
                dp[parseInt(row)+1][parseInt(col)+1] = dp[row][col] + 1;
            } else {
                dp[parseInt(row)+1][parseInt(col)+1] = Math.max( dp[parseInt(row)+1][col], dp[row][parseInt(col)+1]);
            }
        }
    }
    return dp[lenA][lenB];
};

console.log(maxUncrossedLines([1,4,2], [1,2,4]));