/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid === undefined || grid.length === 0) {
        return 0;
    }
    for (const key in grid) {
        console.log(grid[key][0]);
        if (key != 0) {
            grid[key][0] += grid[key-1][0];
        }
        console.log('->'+grid[key][0]);
    }
    for (const key in grid[0]) {
        console.log(grid[0][key]);
        if (key != 0) {
            grid[0][key] += grid[0][key-1];
        }
        console.log('->'+grid[0][key]);
    }
    for (const row in grid) {
        if (row != 0) {
            for (const col in grid[row]) {
                if (col != 0){
                    grid[row][col] += Math.min(grid[row-1][col], grid[row][col-1]);
                }
            }
        }
    }
    console.log(grid[grid.length-1][grid[0].length-1]);
    return grid[grid.length-1][grid[0].length-1];
};

console.log(minPathSum([[1, 2, 3]]));