/**
 * @param {number} n
 * @return {number}
 */
// dp = 1 - 1
// dp = 2 - 2
// dp = 3 - 3
// dp 4 -> 5, 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 
// dp 5 -> 8, 1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 1+2+2, 2+1+2, 2+2+1 
// dp 6 -> 13, 1+1+1+1+1+1, 1+1+1+1+2, 1+1+1+2+1, 1+1+2+1+1, 1+2+1+1+1, 2+1+1+1+1+1
//          , 1+1+2+2, 1+2+1+2, 1+2+2+1, 2+1+2+1, 2+2+1+1, 2+2+2
var climbStairs = function(n) {
    // and of prev + value of prev 
    if (n < 4) {
        return n;
    } 
    let dp = [];
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    for (let i = 4; i <= n; i += 1 ) {
        dp[i] = dp[i-1]+dp[i-2];
    }
    return dp[n];
};
// console.log(climbStairs(5));
// console.log(climbStairs(6));
// console.log(climbStairs(7));

module.exports = climbStairs;