/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let count = 0;
    for (const row in grid) {
        for (const col in grid[row]) {
            if (grid[row][col] === 1) {
                if (parseInt(row)-1 < 0 || grid[parseInt(row)-1][col] === 0) {
                    count += 1;
                }
                if (parseInt(col)-1 < 0 || grid[row][parseInt(col)-1] === 0) {
                    count += 1;
                }
                if (parseInt(row)+1 >= grid.length || grid[parseInt(row)+1][col] === 0) {
                    count += 1;
                }
                if (parseInt(col)+1 >= grid[row].length || grid[row][parseInt(col)+1] === 0) {
                    count += 1;
                }
            }
            console.log(row, col, count);
        }
    }
    return count;
};

module.exports = islandPerimeter;
// console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));