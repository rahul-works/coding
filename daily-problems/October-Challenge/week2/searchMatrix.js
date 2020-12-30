/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) {
        return false;
    }
    let row = 0;
    for (let i = 0; i < matrix.length; i++) {
        if (target <= matrix[i][matrix[i].length - 1]) {
            row = i;
            if (target === matrix[i][matrix[i].length - 1]) {
                return true;
            }
            break;
        }
    }
    for (let i = 0; i < matrix[row].length; i++) {
        if (target === matrix[row][i]) {
            return true;
        }
    }
    return false;
};