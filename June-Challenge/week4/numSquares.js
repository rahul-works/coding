/**
 * @param {number} n
 * @return {number}
 */
function checkPerfectSquare(n) {
    const root = Math.sqrt(n);
    if (parseInt(root)*parseInt(root) === n) {
        return true;
    }
    return false;
}

var numSquares = function(n) {
    if (n <= 3) {
        return n;
    }
    if (checkPerfectSquare(n)) {
        return 1;
    } 
    let i = 0;
    let dp = [];
    while (i <= n) {
        dp[i] = i;
        if (i > 0) {
            for (let j = 1;  j*j <= i; j += 1) {
                dp[i] = Math.min(dp[i], 1+dp[i-j*j]);
            }
        }
        i+=1;
    }
    return dp[n];
};

// console.log(numSquares(12));
// console.log(numSquares(11));
module.exports = numSquares;