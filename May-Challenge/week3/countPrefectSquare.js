/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let count = 0;
    const rowLen = matrix.length+1;
    const colLen = matrix[0].length+1;
    let sqMatrix = [...Array(rowLen)].map(x=>Array(colLen).fill(0));
    
    for (const row in sqMatrix) {
        for (const col in sqMatrix[row]) {
            if (row > 0 && col > 0 && matrix[row-1][col-1] === 1) {
                sqMatrix[row][col] = 1 + Math.min (sqMatrix[row-1][col]
                    , sqMatrix[row][col-1]
                    , sqMatrix[row-1][col-1])
                count += sqMatrix[row][col]
             }
        }
    }
    return count;
};

console.log(countSquares([[0,1,1,1],[1,1,1,1],[0,1,1,1]]));