/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid === undefined) {
        return 0;
    }
    let islandCount = 0;
    console.log('grid length:'+grid.length);
    for (const row in grid) {
        for (const col in grid[row]) {
            console.log('row---col:'+row+'----'+col);
            console.log(grid[row][col] === '1');
            if (grid[row][col] === '1') {
                islandCount += 1;
                console.log('islandCount: '+islandCount);
                checkIslandMakeWater(grid, row, col);
            }
        }
    }
    console.log('islandCount: '+islandCount);
};

function checkIslandMakeWater (grid, row, col) {
    console.log('(row, col)'+row+', '+col);
    if (row < 0 || row >= grid.length ||
        col < 0 || col >= grid[0].length ||
        grid[row][col] == '0') {
        return;
    }
    console.log(grid[row][col]);
    grid[row][col] = '0';
    checkIslandMakeWater (grid, row-1, col);
    checkIslandMakeWater (grid, parseInt(row)+1, col);
    checkIslandMakeWater (grid, row, col-1);
    checkIslandMakeWater (grid, row, parseInt(col)+1);
}

//numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
numIslands([['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']]);

// numIslands([["1","0","1","1","0","1","1"]]);