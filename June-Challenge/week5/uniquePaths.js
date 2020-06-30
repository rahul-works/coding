/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = [];
    for (let i = 0; i<m; i++) {
        dp[i] = [];
        dp[i][0] = 1;
    }
    for (let j = 0; j<n; j++) {
        dp[0][j] = 1;
    }
    for (let i = 1; i<m; i++) {
        for (let j = 1; j<n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];   
};

// console.log(uniquePaths(3, 2));
// console.log(uniquePaths(7, 3));
module.exports = uniquePaths;