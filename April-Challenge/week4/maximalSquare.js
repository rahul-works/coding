/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix === undefined || matrix.length === 0) {
        return 0;
    }
    var dp = matrix.map(function(arr) {
        return arr.slice();
    });
    console.log(dp);
    let max = 0;
    for (const i in matrix ) {
        for (const j in matrix[i]) {
            if (i !== '0' && j !== '0' && matrix[i][j] === '1') {
                dp[i][j] = 1 + Math.min(dp[i-1][j-1], 
                    dp[i][j-1], 
                    dp[i-1][j] );
            }
            if (dp[i][j] > max) {
                max = dp[i][j];
            }
        }
    }
    console.log(dp);
    console.log(max);
    return max*max;
};

// maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]);
// maximalSquare([["1","1","1","1"],["1","1","1","1"],["1","1","1","1"]]);
maximalSquare([
    ["1","0","1","1","0","1"],
    ["1","1","1","1","1","1"],
    ["0","1","1","0","1","1"],
    ["1","1","1","0","1","0"],
    ["0","1","1","1","1","1"],
    ["1","1","0","1","1","1"]]);