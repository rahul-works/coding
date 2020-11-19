/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let row = A.length;
    let col = 0;
    if (A[0] !== undefined) {
        col = A[0].length;
    }
    for (let i = 0; i < row; i++) {
        if (col !== 0){
            for (let j = 0; j < Math.floor(col/2); j++) {
                let temp = A[i][j];
                A[i][j] = A[i][col-j-1];
                A[i][col-j-1] = temp;
            }
            for (let j = 0; j < col; j++) {
                if (A[i][j] === 0) {
                    A[i][j] = 1;
                } else {
                    A[i][j] = 0;
                }
            }
        }
    }
    return A;
};